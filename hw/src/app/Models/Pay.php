<?php
namespace App\Models;

class Pay extends Model
{
    protected $status = 0; // 初始化 $status 属性
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $fillable = ['id','out_trade_no','trade_no','uid','money','payment','created_at','updated_at'];
}
