<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="msvalidate.01" content="1344B0E9FB0D7CBF4802D557DCD0E8AA"/>
    <meta name="bytedance-verification-code" content="85bk3S+RoNckwDGWTKmy"/>
    <title>{{ config('sys.web.title',config('sys.web.name','网站首页')) }}</title>
    <script>
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState == 'hidden') {
                normal_title = document.title;
                document.title = '别走，我会做的更好的';
            } else document.title = normal_title;
        });
    </script>
    <meta name="keywords" content="   ">
    <meta name="description" content="   ">
    <meta name="msapplication-TileImage" content="/Template/4/static/homeassets/img/preview.jpg">
    <link href="/Template/4/css/ab073f79-a0da-4222-8b26-ba0a381b2de3.css" rel="stylesheet">
    <script src="/Template/4/js/1ee88bce-5272-4aa1-9bda-0b1857ce02d0.js"></script>
    <link href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Template/4/css/2f1869ae-554b-4a6e-95a9-8715db573791.css" rel="stylesheet" type="text/css"
          media="all">
    <meta name="baidu_union_verify" content="addad229268366aeee33f9e5fceb6662">
    <script type="text/javascript">
        (function ($) {
            $.fn.snow = function (options) {
                var $flake = $('<div id="snowbox" />').css({
                        'position': 'absolute',
                        'z-index': '9999',
                        'top': '-50px'
                    }).html('❄'),
                    documentHeight = $(document).height(),
                    documentWidth = $(document).width(),
                    defaults = {
                        minSize: 10,
                        maxSize: 20,
                        newOn: 1000,
                        flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
                    },
                    options = $.extend({}, defaults, options);
                var interval = setInterval(function () {
                    var startPositionLeft = Math.random() * documentWidth - 100,
                        startOpacity = 0.5 + Math.random(),
                        sizeFlake = options.minSize + Math.random() * options.maxSize,
                        endPositionTop = documentHeight - 200,
                        endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                        durationFall = documentHeight * 10 + Math.random() * 5000;
                    $flake.clone().appendTo('body').css({
                        left: startPositionLeft,
                        opacity: startOpacity,
                        'font-size': sizeFlake,
                        color: options.flakeColor
                    }).animate({
                        top: endPositionTop,
                        left: endPositionLeft,
                        opacity: 0.2
                    }, durationFall, 'linear', function () {
                        $(this).remove()
                    });
                }, options.newOn);
            };
        })(jQuery);
        $(function () {
            $.fn.snow({
                minSize: 5, /* 定义雪花最小尺寸 */
                maxSize: 10,/* 定义雪花最大尺寸 */
                newOn: 300  /* 定义密集程度，数字越小越密集 */
            });
        });
    </script>
    <script>//头条自动收录
        (function () {
            var el = document.createElement("script");
            el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?62ee2b77c006dbffcb1472368c655db791f3c26992111e3ff0a04eb7671022ea3871f0d6a9220c04b06cd03d5ba8e733fe66d20303562cd119c1d6f449af6378";
            el.id = "ttzz";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(el, s);
        })(window)
    </script>
</head>
<body>
<div class="wrapper">
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div class="container container-s">
            <div class="navbar-brand">
                {{ config('sys.web.name') }}</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-right">
                    <li class="nav-item"><a class="btn-cta nav-link js-scroll-trigger"
                                            href="{{ config('sys.html_kefu') }}">联系客服</a></li>

                </ul>
            </div>
        </div>
    </nav>
    <div id="main" class="main">
        <div class="home">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <div class="hero-img wow fadeIn">
                            <img class="img-fluid" src="/Template/4/img/411fe369-fe85-43d8-878f-a570568d8154.png"
                                 alt="码支付">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="hero-content wow fadeIn">
                            <h1></h1>
                            <p> 公益域名，免费使用，各种平台，阿里、腾讯、西部、亚马逊，注册账号免费使用. </p>
                            <a class="btn-action js-scroll-trigger" href="/home">登陆</a>

                            <a class="btn-action js-scroll-trigger" href="/login">注册</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="products" class="features wow fadeInDown">
            <div class="container-m">
                <div class="row text-center">
                    <div class="col-md-12">
                        <div class="features-intro">
                            <h2>{{ config('sys.web.keywords') }}  </h2>
                            <p>{{ config('sys.web.description') }}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-list">
                            <div class="card-icon">
                                <div class="card-img">
                                    <img src="/Template/4/img/1c4eb974-ea44-4725-8483-85e1c6496020.png" width="35"
                                         alt="易支付">
                                </div>
                            </div>
                            <div class="card-text">
                                <h3>行业软件创新先驱者</h3>
                                <p>更周全、更稳定、更细致的产品及服务!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-list">
                            <div class="card-icon">
                                <div class="card-img">
                                    <img src="/Template/4/img/f3899962-5364-4911-9609-472f1558e073.png" width="35"
                                         alt="支付平台">
                                </div>
                            </div>
                            <div class="card-text">
                                <h3>可靠、灵活、安全、可扩展</h3>
                                <p>各种平台，域名免费及解析</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-list">
                            <div class="card-icon">
                                <div class="card-img">
                                    <img src="/Template/4/img/ce9c3972-d317-4914-a3f1-3050c4f3a878.png" width="35"
                                         alt="源支付">
                                </div>
                            </div>
                            <div class="card-text">
                                <h3>丰富的行业运营经验</h3>
                                <p>让我们更懂如何解决不同客户的需求！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="features" class="flex-split">
            <div class="container-s">
                <div class="flex-intro align-center wow fadeIn">
                    <h2>操作简单</h2>
                    <p>一键解析域名</p>
                </div>
                <div class="flex-inner align-center">
                    <div class="f-image wow">
                        <img class="img-fluid" src="/Template/4/img/3333.png"
                             alt="{{ config('sys.web.keywords') }}官网">
                    </div>
                    <div class="f-text">
                        <div class="left-content">
                            <h2>人性化面板</h2>
                            <p>一目了然 操作简单</p>
                            <a href="/home">立即使用</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="yd-stats wow fadeIn">
            <div class="container-s">
                <div class="row text-center">
                    <div class="col-sm-12">
                        <div class="intro">
                            <h2>真实数据</h2>
                            <p>数据这种东西，要真的看着才顺心呐.</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="counter-up">
                            <h3><span class="counter">60+</span>位</h3>
                            <div class="counter-text">
                                <h2>用户数量</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="counter-up">
                            <h3><span class="counter">10+</span>位</h3>
                            <div class="counter-text">
                                <h2>今日注册</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="counter-up">
                            <h3><span class="counter">999+</span>次</h3>
                            <div class="counter-text">
                                <h2>今日支付</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="yd-link">
                            <a href="/home">我也要使用&gt;&gt; 点这里</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ar-ft-single wow fadeIn">
            <div class="container-m">
                <div class="ar-feature">
                    <div class="ar-list">
                        <ul>
                            <li>
                                <div class="ar-icon">
                                    <img src="/Template/4/img/70f01386-18e3-4694-aa65-def8a4fd5708.png" width="30"
                                         alt="免费码支付">
                                </div>
                                <div class="ar-text">
                                    <h3>阿里云</h3>
                                    <p> 阿里云AccessKeyId </p>
                                    <p></p>
                                    <p> 免费解析 </p>
                                </div>
                            </li>
                            <li>
                                <div class="ar-icon">
                                    <img src="/Template/4/img/43bacb01-cf91-4906-9d19-5de8aeca8906.png" width="30"
                                         alt="V免签">
                                </div>
                                <div class="ar-text">
                                    <h3>腾讯云</h3>
                                    <p>腾讯云</p>
                                    <p> 各种com，cn，xyz </p>
                                </div>
                            </li>
                            <li>
                                <div class="ar-icon">
                                    <img src="/Template/4/img/55c6f51d-dd5a-4ed6-b605-fc8a3ed97d14.png" width="30"
                                         alt="个人支付">
                                </div>
                                <div class="ar-text">
                                    <h3>西部</h3>
                                    <p>各种顶级域名，域名数量99+</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ar-image">
                        <img class="ar-img img-fluid" src="/Template/4/img/411fe369-fe85-43d8-878f-a570568d8154.png"
                             alt="码支付官方">
                    </div>
                </div>
            </div>
        </div>
        <div align="center">
            <div style="width:230px;margin:0 auto; padding:10px 0;">
                <a target="_blank" href="http://beian.miit.gov.cn/"
                   style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"><b> </b></a><br>
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50023502000416"
                   style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"></a>
            </div>
        </div>


        <script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
        <script>LA.init({id: "JoXLp5muRHy6TPD2", ck: "JoXLp5muRHy6TPD2", autoTrack: true, hashMode: true})</script>
        <script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8"
                src="https://v6-widget.51.la/v6/JoXLp5muRHy6TPD2/quote.js?theme=#1690FF,#333333,#999999,#333333,#FFFFFF,#1690FF,8&f=12&display=0,0,1,1,1,1,0,0"></script>
    </div>
</div>
<div id="back-top" class="bk-top">
    <div class="bk-top-txt">
        <a class="back-to-top js-scroll-trigger" href="#main"><i class="fa fa-chevron-up"></i></a>
    </div>
</div>
<!-- 右键提示开始 -->
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?6d2f8ec2964154545d8b063496e3ba7e";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<script type="text/javascript">

    var a_idx = 0;

    jQuery(document).ready(function ($) {

        $("body").click(function (e) {

            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");

            var $i = $("<span/>").text(a[a_idx]);

            a_idx = (a_idx + 1) % a.length;

            var x = e.pageX,

                y = e.pageY;

            $i.css({

                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,

                "top": y - 20,

                "left": x,

                "position": "absolute",

                "font-weight": "bold",

                "color": "#ff6651"

            });

            $("body").append($i);

            $i.animate({

                    "top": y - 180,

                    "opacity": 0

                },

                1500,

                function () {

                    $i.remove();

                });

        });

    });
</script>
<script>
    document.oncontextmenu = new Function("event.returnValue=false;"); //禁止右键功能
    document.onkeydown = MM_KeyPress;

    function MM_KeyPress(num) {
        var keycode = event.keyCode;
        if (keycode == 8)//屏蔽退格健
        {
            event.keyCode = 0;
            return;
        }
        if (keycode >= 122 && keycode <= 123)//屏蔽f12功能键
        {
            event.keyCode = 0;
            event.returnValue = false;
            return;
        }
    }
</script>
<style>
    .round-inner, .text-muted {
        color: #fff !important;
    }
</style>
<script type="text/javascript" src="/Template/4/js/263484bc-fd2f-4172-939c-54f3e64428b8.js"></script>
<script type="text/javascript" src="/Template/4/js/15e10346-6c21-41dc-880d-a016961b6ae2.js"></script>
<script type="text/javascript" src="/Template/4/js/6c39cf11-32cc-436d-b4ac-45b75a998969.js"></script>
</body>
</html>
