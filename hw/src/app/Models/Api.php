<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Api extends Authenticatable
{
    use Notifiable;
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $hidden = ['token'];

    public function fromDateTime($value)
    {
        return strtotime(parent::fromDateTime($value));
    }

    public function scopeSearch($query)
    {
        $uid = request()->post('id');
    }

    public function scopePageSelect($query)
    {
        $pageSize = intval(request()->post('pageSize'));
        $pageSize = ($pageSize < 10 || $pageSize > 200) ? 10 : $pageSize;

        return $query->paginate($pageSize);
    }

    public function scopeToday($query)
    {
        $query->whereRaw("created_at >= UNIX_TIMESTAMP(CURDATE())");
    }

    public static function point($uid, $action, $point, $remark = null)
    {
        if ($uid && $user = static::find($uid)) {
            if ($point < 0 && abs($point) > $user->point) {
                return false;
            }
            if ($user->increment('point', $point)) {
                UserPointRecord::create([
                    'uid' => $uid,
                    'action' => $action,
                    'point' => $point,
                    'rest' => $user->point,
                    'remark' => $remark
                ]);
                return true;
            }
        }
        return false;
    }

    public function User(){
        return $this->hasOne(User::class,'uid','id');
    }

    public function group()
    {
        return $this->belongsTo(UserGroup::class, 'gid', 'gid');
    }

}
