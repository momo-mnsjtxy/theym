@extends('admin.layout.index')
@section('title', '后台首页')
@section('content')
    <div id="vue" class="pt-3 pt-sm-0">
        <div class="card">
            <div class="card-header">
                添加域名简单教程
            </div>
            <div class="card-body">
                <div class="list-group-item">
                    1、点击菜单栏的<a href="/admin/config/dns">接口配置</a>，先对你使用的域名解析平台的接口进行配置！
                </div>
                <div class="list-group-item">
                    2、点击菜单栏的<a href="/admin/domain/list">域名列表</a>，然后点击添加》选择你配置的解析平台》获取，然后选择你要添加的域名，然后保存！
                </div>
            </div>
        </div>
    </div>
    <div id="vue">
        <div class="card">
            <div class="card-header">
                服务器信息
            </div>
            <div class="card-body">
                <div class="list-group-item">
                    Laravel版本：{{app()->version()}}<br>
                    服务器版本：{{php_uname('s').php_uname('r')}}<br>
                    PHP版本：{{PHP_VERSION}}<br>
                    服务器环境：{{$_SERVER['SERVER_SOFTWARE']}}<br>
                    服务器域名：{{$_SERVER['SERVER_NAME']}}<br>
                    服务器当前时间：{{date('Y-m-d H:i:s')}}<br>
                    服务器语言：{{$_SERVER['HTTP_ACCEPT_LANGUAGE']}}<br>
                    服务器剩余空间：{{round((@disk_free_space(".")/(1024*1024)),2)}}M<br>
                    服务器已用空间：{{round((@disk_total_space(".")/(1024*1024)),2)}}M<br>
                    服务器总共空间：{{round((@disk_free_space(".")/(1024*1024)),2)}}M<br>
                    服务器已用空间占比：{{round(((@disk_free_space(".")/@disk_total_space("."))*100),2)}}%<br>
                    服务器PHP已用内存：{{round((memory_get_usage()/1024/1024),2)}}M<br>
                </div>
            </div>
        </div>
    </div>
@endsection
