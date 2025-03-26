<?php

namespace App\Models;

class Activity extends Model
{
    protected $table = 'activitys';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $guarded = ['id'];
    protected $hidden = ['id','uid', 'name', 'point', 'time', 'ip'];
    public $timestamps = false;
}
