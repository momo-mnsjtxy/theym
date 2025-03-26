<?php
/**
 * Created by PhpStorm.
 * User: me
 * Date: 2019/4/14
 * Time: 16:36
 */

namespace App\Models;


class DomainShare extends Model
{
    protected $primaryKey = 'id';
    protected $guarded = ['id'];


    public function scopeSearch($query, $guard = 'web')
    {
        $query->with(['domain' => function ($query) {
            $query->select(['did', 'domain']);
        }]);
        $did = intval(request()->post('did'));
        if ($did) $query->where('did', $did);
        $email = request()->post('email');
        if ($email) $query->where('email', $email);
        $name = request()->post('name');
        if ($name) $query->where('name', $name);
        if ($guard === 'admin') {
            $uid = request()->post('uid');
            if ($uid) $query->where('uid', $uid);
            $query->with(['user' => function ($query) {
                $query->select(['uid', 'username']);
            }]);
        }
    }

    public function domain()
    {
        return $this->belongsTo(Domain::class, 'did', 'did');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'uid', 'uid');
    }
}
