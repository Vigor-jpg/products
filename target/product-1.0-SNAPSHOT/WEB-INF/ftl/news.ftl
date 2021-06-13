<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>新闻详情</title>
    <link rel="stylesheet" href="../css/base.css"/>
    <link rel="stylesheet" href="../css/header.css"/>
    <link rel="stylesheet" href="../css/news_model.css"/>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1621012_crnjbz4gpt6.css"/>
    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/news_model.js"></script>
</head>
<body>
<div class="page-container">
    <div class="header">
        <div class="header-logo"></div>
        <ul class="main-header">
            <div id="full-meun"></div>
            <li class="main-header-item"><a>首页</a></li>
            <li class="main-header-item"><a>产品</a></li>
            <li class="main-header-item"><a>新闻中心</a></li>
            <li class="main-header-item"><a>关于我们</a></li>
        </ul>
    </div>
    <div class="content">
        <div class="content_news">
            <div class="content_news_top">
                <h1>${title}</h1>
                <p>发表日期：${time} 分类：${target}</p>
            </div>
            <div class="content_news_txt">
                ${content}
            </div>
            <div class="content_news_send">
                <h1>将文章分享到</h1>
                <ul class="content_news_ul">
                    <li><span class="iconfont icon-qq"></span></li>
                    <li><span class="iconfont icon-weixin"></span></li>
                    <li><span class="iconfont icon-weibo"></span></li>
                </ul>
            </div>
        </div>
        <div class="content_more">
            <h1 class="content_more_top">相关新闻</h1>
            <ul class="content_more_ul">
                <li>
                    <h2 style="overflow: hidden"><a href="#">云天下2020年春节放假安排</a></h2>
                    <p>发表日期：2020年1月10日 浏览次数：111</p>
                </li>
                <li>
                    <h2><a>云天下2020年春节放假安排</a></h2>
                    <p>发表日期：2020年1月10日 浏览次数：111</p>
                </li>
                <li>
                    <h2><a>云天下2020年春节放假安排</a></h2>
                    <p>发表日期：2020年1月10日 浏览次数：111</p>
                </li>
                <li>
                    <h2><a>云天下2020年春节放假安排</a></h2>
                    <p>发表日期：2020年1月10日 浏览次数：111</p>
                </li>
                <li>
                    <h2><a>云天下2020年春节放假安排</a></h2>
                    <p>发表日期：2020年1月10日 浏览次数：111</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer">

    </div>
</div>
</body>
</html>