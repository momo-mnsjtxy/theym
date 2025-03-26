<!DOCTYPE html>

<html step="2">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


    <title>{{ config('sys.web.title',config('sys.web.name','网站首页')) }}</title>
    <meta name="keywords" content="{{ config('sys.web.title',config('sys.web.name','网站首页')) }}">
    <meta name="description" content="{{ config('sys.web.title',config('sys.web.name','网站首页')) }}">
    <meta name="author" content="{{ config('sys.web.title',config('sys.web.name','网站首页')) }}">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=1280">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="/Template/2/pangu.css">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta name="apple-mobile-web-app-title" content="ckmov">
    <meta name="google" value="notranslate">
</head>
<body _c_t_common="1" cz-shortcut-listen="true">
<div id="stage">
    <article class="step-1">
        <div class="step-1-in">
            <div id="test" style="transform: rotateX(0.1deg) rotateY(-1.675deg);">
                <header>
                    <div class="layout">
                        <h1>{{ config('sys.web.name') }}</h1>
                        <nav>
                            <a href="/">首页</a>
                            @if(auth()->check())
                                <a href="/home" class="login-link">用户中心</a>
                                <a href="/logout" class="login-link" onclick="return confirm('确认退出登录？');">退出登录</a>
                            @else
                                <a href="/home" class="login-link">登录账号</a>
                                <a href="/login" class="login-link">注册账号</a>
                            @endif
                        </nav>
                    </div>
                </header>

                <h2><span class="line line-1">可能是<span class="moji-1">最稳</span>的</span><span class="line line-2">域名服务商</span>
                </h2>
                <i class="bg"></i><i class="hr"></i>
                <div class="shell-box">
                    <i class="shell-shadow"></i><i class="shell"><span></span></i>
                </div>
                <a class="link-reg" href="/home">开始使用</a><i class="light"></i>
            </div>
        </div>
    </article>
    <span class="tip tip-1">向下滚动</span>
    <article class="step-2">
        <div class="content">
            <h3 class="ui-h ui-h-1">技术优势</h3>
            <ul>
                <li class="feature-1">
                    <div class="icon">
                        <i></i><big>1</big><cite>Second</cite>
                    </div>
                    <h4>域名解析速度</h4>
                    <p>
                        解析域名只需要1分钟，域名将解析到dns.
                    </p>
                </li>
                <li class="feature-2">
                    <div class="icon">
                        <i></i><big>1</big><cite>Minute</cite>
                    </div>
                    <h4>即开即用</h4>
                    <p>
                        注册账号，立即使用.
                    </p>
                </li>
                <li class="feature-3">
                    <div class="icon">
                        <i></i><big>1</big><cite>Hour</cite>
                    </div>
                    <h4>注册就送余额</h4>
                    <p>
                        免费送余额
                    </p>
                </li>
                <li class="feature-4">
                    <div class="icon">
                        <i></i><big>1000</big><cite>Mbps</cite>
                    </div>
                    <h4>千兆网络支持</h4>
                    <p>
                        云端建站，模拟MAC环境，更稳定！
                    </p>
                </li>
                <li class="feature-5">
                    <div class="icon">
                        <i></i><big></big><cite>SmartQuota</cite>
                    </div>
                    <h4>域名接口</h4>
                    <p>
                        多个域名接口通道轮番使用.
                    </p>
                </li>
                <li class="feature-6">
                    <div class="icon">
                        <i></i><big></big><cite>API</cite>
                    </div>
                    <h4>开放接口支持</h4>
                    <p>
                        对接平台从此变得So Easy！
                    </p>
                </li>
            </ul>
        </div>
        <i class="after"></i></article>
    <article class="step-3">
        <h3 class="ui-h ui-h-2">服务购买</h3>
        <div class="switch index-nav" id="switch">
            <div id="span-1" onclick="selectDatacenter(&quot;rs&quot;)" class="span-1 active">
                欢迎选购
            </div>
            <div id="span-1" onclick="selectDatacenter(&quot;rs&quot;)" class="span-1">
                专注于高品质
            </div>
            <div id="span-1" onclick="selectDatacenter(&quot;rs&quot;)" class="span-1">
                阿里 / 腾讯 / 西部
            </div>
        </div>
        <ul>
            <li>
                <div class="head">
                    <h4 id="price-1"><big>免费域名.COM</big><small>免费用.</small></h4>
                </div>
                <ul>
                    <li><i>时间</i><b>无限</b></li>
                    <li><i>价格</i><b>免费</b></li>

                </ul>
                <a class="button" href="/home">立即使用</a></li>


        </ul>
        <div class="note layout" id="price-note">
            <p>※ 域名覆盖阿里、腾讯、西部、亚马逊.
            </p>
            <p style="margin: 0 auto; text-align: center">
                <br>
                <a target="_blank" style="color:#FFF;text-decoration:underline"></a>
            </p>
        </div>
    </article>
    <article class="step-4">
        <div id="step4">
            <div class="content">
                <i></i>
                <h3 class="ui-h ui-h-3">域名99+</h3>
                <div class="note layout">
                    <p>
                        阿里，腾讯，亚马逊，西部任选
                    </p>
                    <p>
                        自动监控违规域名，发现自动删除
                    </p>
                    <p>
                        我们会利用我们多年來的运营经验，为您提供最好的服务与产品品质
                    </p>
                </div>
                <a class="button" href="/home">99+域名<small>免费使用</small></a>
                <div class="note layout"><p class="op5">即可享受专属客服专属通道</p></div>
                <p>联系客服： <a class="xu" href=" {{ config('sys.html_kefu') }}">点击联系QQ</p>
            </div>
            <i class="shell-2"></i>
        </div>
    </article>
    <footer class="step-5">
        <div class="htko">
            <p>
                一切的开端，梦的延续
            </p>
        </div>
        <div class="note layout" id="price-note" style="padding: 0;font-size: 20px;">
            <p style="margin: 0 auto; text-align: center">

            <div class="layout">
                <div class="l">
                    <a target="_blank">Copyright 2020 - 2023 . All Rights Reserved. </a><a
                        href="/">{{ config('sys.web.name') }}</a> 版权所有
                </div>
            </div>
    </footer>

</div>
<script src="/Template/2/c.js"></script>

<div style="display: none" class="ubey-RecordingScreen-count-down ubey-RecordingScreen-count-down-container">
    <style>
        .ubey-RecordingScreen-count-down-container {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            z-index: 9999999999999;
            background-color: rgba(0, 0, 0, 0.2);
        }

        .ubey-RecordingScreen-count-down-content {
            position: absolute;
            display: flex;
            top: 50%;
            left: 50%;
            justify-content: center;
            align-items: center;
            color: white;
            height: 15em;
            width: 15em;
            transform: translate(-50%, -100%);
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
        }

        #ubey-RecordingScreen-count-count {
            font-size: 14em;
            transform: translateY(-2%);
        }
    </style>
    <div class="ubey-RecordingScreen-count-down-content">
        <span id="ubey-RecordingScreen-count-count"></span>
    </div>
</div>
</body>
</html>
