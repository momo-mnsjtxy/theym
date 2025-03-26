<?php
/**
 * Created by PhpStorm.
 * User: me
 * Date: 2019/4/14
 * Time: 16:41
 */

namespace App\Http\Controllers\Api;


use App\Helper;
use App\Models\Api;
use App\Models\Domain;
use App\Models\DomainRecord;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function post(Request $request, $action)
    {
        if ($request->has('token')) {
            $token = $request->post('token');
            $id = Api::where('token', $token)->first();
            if ($id) {
                Auth::loginUsingId($id->uid);
            } else {
                return ['status' => -1, 'message' => 'token不存在'];
            }
            if (Auth::user()->status != 2) {
                return ['status' => -1, 'message' => "对不起，请先完成认证！<a href='/home/profile'>点击认证</a>"];
            }

            switch ($action) {
                case 'recordList':
                    return $this->recordList($request);
                case 'recordStore':
                    return $this->recordStore($request);
                case 'recordDelete':
                    return $this->recordDelete($request);
                default:
                    return ['status' => -1, 'message' => '对不起，此操作不存在！'];
            }
        } else {
            return ['status' => -1, 'message' => '没有输入token'];
        }
    }

    public function get(Request $request, $action)
    {
        if ($request->has('token')) {
            $token = $request->get('token');
            $id = Api::where('token', $token)->first();
            if ($id) {
                Auth::loginUsingId($id->uid);
            }else{
                return ['status' => -1, 'message' => 'token不存在'];
            }

            switch ($action) {
                case 'recordList':
                    return $this->recordList($request);
                case 'recordStore':
                    return $this->recordStore($request);
                case 'recordDelete':
                    return $this->recordDelete($request);
                default:
                    return ['status' => -1, 'message' => '对不起，此接口不存在！'];
            }
        } else {
            return ['status' => -1, 'message' => '没有输入token'];
        }
    }

    private function recordStore(Request $request)
    {
        $result = ['status' => -1];
        $id = intval($request->post('id'));
        $data = [
            'uid' => Auth::id(),
            'did' => intval($request->post('did')),
            'name' => $request->post('name'),
            'type' => $request->post('type'),
            'line_id' => $request->post('line_id'),
            'value' => $request->post('value'),
            'line' => '默认'
        ];
        list($check, $error) = Helper::checkDomainName($data['name']);
        if (!$check) {
            $result['message'] = $error;
        } elseif ($id && !$record = DomainRecord::where('uid', Auth::id())->where('id', $id)->first()) {
            $result['message'] = '记录不存在';
        } elseif (!$data['value']) {
            $result['message'] = '请输入记录值';
        } elseif (!$id && DomainRecord::where('did', $data['did'])->where('name', $data['name'])->where('uid', '!=', Auth::id())->where('line_id', $data['line_id'])->first()) {
            $result['message'] = '此主机记录已被使用';
        } elseif (!$domain = Domain::available()->where('did', $data['did'])->first()) {
            $result['message'] = '域名不存在，或无此权限';
        } elseif (!$dns = $domain->dnsConfig) {
            $result['message'] = '域名配置错误[No Config]';
        } elseif (!$_dns = \App\Klsf\Dns\Helper::getModel($dns->dns)) {
            $result['message'] = '域名配置错误[Unsupporte]';
        } else {
            $_dns->config($dns->config);
            $lines = $_dns->getRecordLine($domain->domain_id, $domain->domain);
            foreach ($lines as $line) {
                if ($line['Id'] == $data['line_id']) {
                    $data['line'] = $line['Name'];
                }
            }
            if ($id) {
                //更新
                list($ret, $error) = $_dns->updateDomainRecord($record->record_id, $data['name'], $data['type'], $data['value'], $data['line_id'], $domain->domain_id, $domain->domain);
                if ($ret) {
                    if (DomainRecord::where('id', $id)->update($data)) {
                        $result = ['status' => 0, 'message' => '更新成功'];
                    } else {
                        $result['message'] = '更新失败，请稍后再试！';
                    }
                } else {
                    $result['message'] = '更新记录失败:' . $error;
                }
            } else {
                //添加
                if ($domain->point > 0 && Auth::user()->point < $domain->point) {
                    $result['message'] = '账户剩余积分不足！';
                } else {
                    list($ret, $error) = $_dns->addDomainRecord($data['name'], $data['type'], $data['value'], $data['line_id'], $domain->domain_id, $domain->domain);
                    if ($ret) {
                        if ($domain->point > 0 && !User::point(Auth::id(), '消费', 0 - $domain->point, "添加记录[{$data['name']}.{$domain->domain}]({$data['line']})")) {
                            $result['message'] = '账户剩余积分不足！';
                            $_dns->deleteDomainRecord($ret['RecordId'], $domain->domain_id, $domain->domain);
                        } else {
                            $data['record_id'] = $ret['RecordId'];
                            if (DomainRecord::create($data)) {
                                $result = ['status' => 0, 'message' => '添加成功'];
                            } else {
                                list($ret, $error) = $_dns->deleteDomainRecord($ret['RecordId'], $domain->domain_id, $domain->domain);
                                $result['message'] = '添加失败，请稍后再试！';
                            }
                        }
                    } else {
                        $result['message'] = '添加记录失败:' . $error;
                    }
                }
            }
        }
        return $result;
    }

    private function recordList(Request $request)
    {
        $data = DomainRecord::search()
            ->where('uid', auth()->id())
            ->orderBy('id', 'desc')
            ->pageSelect();
        return ['status' => 0, 'message' => '', 'data' => $data];
    }

    private function recordDelete(Request $request)
    {
        $result = ['status' => -1];
        $id = intval($request->post('id'));
        if (!$id || !$row = DomainRecord::where('id', $id)->where('uid', Auth::id())->first()) {
            $result['message'] = '记录不存在';
        } else {
            Helper::deleteRecord($row);
            if ($row->delete()) {
                $result = ['status' => 0, 'message' => '删除成功'];
            } else {
                $result['message'] = '删除失败，请稍后再试！';
            }
        }
        return $result;
    }

}
