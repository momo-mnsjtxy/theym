<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="最棒的免费二级域名！提供备案域名，使用完全免费">
    <link rel="icon" href="/favicon.ico">
    <title>厚浪域名</title>
    <meta name="keywords" content="厚浪, 免费二级域名, 二级域名分发, 雨云, 创智">
    <link rel="stylesheet" href="/Template/houlang/index.css">
</head>

<body>
<div id="app" data-v-app="">
    <div data-v-4c9a0228="" class="center example-nav">
        <div data-v-4c9a0228="" class="square">
            <div data-v-624ee7de="" data-v-4c9a0228="" class="home_content">
                <a data-v-624ee7de="" href="/"><img
                        data-v-624ee7de="" src="/images/logo-ico.png" alt="Logo" class="logo"></a><br
                    data-v-624ee7de=""><br data-v-624ee7de="">
                <div data-v-624ee7de="" class="description">最棒的免费二级域名！</div>
                <div class="search_box">
                    <div class="con-input">
                        <div
                            class="vs-component--primary vs-component--is-color vs-input is-rounded vs-input--has-color"
                            style="--vs-color: var(--vs-primary);">
                            <div class="vs-input__wrapper">
                                <input id="vs-id-7606-0" type="text"
                                                                  class="vs-input__original" placeholder=""><label
                                    for="vs-id-7606-0" class="vs-input__placeholder">您想要的域名前缀</label><label
                                    for="vs-id-7606-0" class="vs-input__label"></label><!--v-if--><!--v-if-->
                                <div class="vs-input__affects">
                                    <div class="vs-input__affects--1"></div>
                                    <div class="vs-input__affects--2"></div>
                                </div>
                            </div><!----><!----><!----><!----><!----></div>
                    </div>
                    <div class="con-select">
                        <div class="vs-select is-bottom vs-popper__trigger" style="--vs-color: var(--vs-primary);">
                            <!--v-if--><select id="vs-id-7606-1" name="did" class="form-control vs-select__input">
                                @foreach(\App\Helper::getAvailableDomains() as $domain)
                                    <option value="{{ $domain->did }}">.{{ $domain->domain }}</option>
                                @endforeach
                            </select></div>
                    </div>
                </div>
                <br><br><br>
                <div class="btn"><a href="/home">
                        <button class="btn">
                            <svg height="10" width="10" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1"
                                 id="Layer_1" class="sparkle">
                                <path
                                    d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                            </svg>
                            <span class="text">即刻解析！</span></button>
                    </a></div>
                <br data-v-624ee7de=""></div>
        </div>
        <div data-v-83968640="" data-v-4c9a0228="" class="box"></div>
    </div>
</div>


<div id="vs-popper-container-7606">
    <div class="vs-popper is-not-arrow vs-select__content vs-component--primary vs-component--is-color"
         data-popper-placement="bottom"
         style="--vs-color: var(--vs-primary); position: absolute; z-index: 2008; width: 200px; left: 482.5px; top: 339.844px; display: none;">
        <div class="vs-scrollbar" style="">
            <div class="vs-select__options vs-scrollbar__wrap vs-scrollbar__wrap--hidden-default"
                 style="max-height: 200px;">
                <div class="vs-scrollbar__view" style="">
                    <button class="vs-select__option"> ⭐️669.ink（已备案）</button>
                    <button class="vs-select__option"> g6i.cn</button>
                    <button class="vs-select__option"> o-4.cn</button>
                    <button class="vs-select__option"> j2n.top</button>
                    <button class="vs-select__option"> sx7.top</button>
                    <button class="vs-select__option"> v2be.top</button>
                    <button class="vs-select__option"> rainyun.ink</button>
                    <a href="/login?act=reg">
                        <button class="vs-select__option"> 更多30+可用域名····🥳</button>
                    </a></div>
            </div>
            <div class="vs-scrollbar__bar is-horizontal" style="height: 3px;">
                <div class="vs-scrollbar__thumb" style="transform: translateX(0%);"></div>
            </div>
            <div class="vs-scrollbar__bar is-vertical" style="width: 3px;">
                <div class="vs-scrollbar__thumb" style="transform: translateY(0%);"></div>
            </div>
        </div><!--v-if--></div>
</div>
</body>
</html>
