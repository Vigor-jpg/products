<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>产品详情</title>
    <link rel="stylesheet" href="../css/base.css"/>
    <link rel="stylesheet" href="../css/header.css"/>
    <link rel="stylesheet" href="../css/pro_detail.css"/>
    <link rel="stylesheet" href="../css/footer.css"/>
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/header.js"></script>
    <script type="text/javascript" src="../js/product_model.js"></script>
</head>
<body>
<div class="page-container">
    <div class="header">
        <div class="header-logo"></div>
        <ul class="main-header">
            <div id="full-meun"></div>
            <li class="main-header-item">
                <a href="home.html" target="_blank">首页</a>
            </li>
            <li class="main-header-item">
                <a href="../product.html" target="_blank">产品</a>
            </li>
            <li class="main-header-item">
                <a href="news.html" target="_blank">新闻中心</a>
                <div class="drop_down">
                    <ul>
                        <li><a href="../qyxw.html" target="_blank">企业新闻</a></li>
                        <li><a href="../jszx.html" target="_blank">技术咨询</a></li>
                        <li><a href="../hydt.html" target="_blank">行业动态</a></li>
                    </ul>
                </div>
            </li>
            <li class="main-header-item">
                <a href="company.html" target="_blank">企业信息</a>
                <div class="drop_down">
                    <ul>
                        <li><a href="../company.html" target="_blank">公司简介</a></li>
                        <li><a href="../gsfm.html" target="_blank">公司风貌</a></li>
                        <li><a href="../qysm.html" target="_blank">企业使命</a></li>
                        <li><a href="../zpzl.html" target="_blank">招聘专栏</a></li>
                        <li><a href="../lxwm.html" target="_blank">联系我们</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>

    <div class="content">
        <div class="img-box">
            <img class="img-intro" src="../img/product/p_center.jpg"/>
        </div>
        <div class="i_con">
            <div class="left_bg"></div>
            <div class="right_bg"></div>
            <h1 class="inner_t"></h1>
            <div class="con_produ">
                <div class="detail_img">
                    <img src="../img/product/9046f7ed5c4b78aebe5c3781d70dd6eb.jpg">
                </div>
                <div class="detail_con">
                    <h1>${product_name}</h1>
                    <img src="../img/product/line-bg.png"/>
                    <p>${product_detail}</p>
                    <a><input type="button" value="${product_target}"/></a>
                </div>
                <p class="clr"></p>
                <div class="shop_con">
                    <div class="shop_con_tab">
                        <ul>
                            <li class="on">产品概述</li>
                            <li>产品规格</li>
                            <li>其他说明</li>
                        </ul>
                        <p class="clr"></p>
                    </div>
                    <div class="shop_info">
                        <div id="info_detail">
                            <pre>${product_descrip}</pre>
                        </div>
                        <div id="info_size" hidden="hidden">
                            <pre>${product_size}</pre>
                        </div>
                        <div id="info_op" hidden="hidden">
                            <pre>${product_other}</pre>
                        </div>
                        <p class="clr"></p>
                    </div>

                </div>
                <div class="other_pro">
                    <h1>同类其他产品</h1>
                    <ul class="other_pro_shop">
                        <li>
                            <a href="products/test.html"><img src="../img/product/d3f50fdd8ff91f06908c66f1415adc8e.png"></a>
                            <div class="other_shop_info">
                                <h3>三安98988</h3>
                                <p>肥效持久，利用率高</p>
                            </div>
                        </li>
                        <li>
                            <a href="products/test.html"><img src="../img/product/d3f50fdd8ff91f06908c66f1415adc8e.png"></a>
                            <div class="other_shop_info">
                                <h3>三安98988</h3>
                                <p>肥效持久，利用率高</p>
                            </div>
                        </li>
                        <li>
                            <a href="products/test.html"><img src="../img/product/d3f50fdd8ff91f06908c66f1415adc8e.png"></a>
                            <div class="other_shop_info">
                                <h3>三安98988</h3>
                                <p>肥效持久，利用率高</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="box_txt">
                    <ul class="txt_list">
                        <li>
                            <img class="vm" src="../img/product/txt_ioc.png"/>
                            <span class="vm"><a>油菜施肥技术</a></span>
                        </li>
                        <li>
                            <img class="vm" src="../img/product/txt_ioc.png"/>
                            <span class="vm"><a>油菜施肥技术</a></span>
                        </li>
                        <li>
                            <img class="vm" src="../img/product/txt_ioc.png"/>
                            <span class="vm"><a>油菜施肥技术</a></span>
                        </li>
                        <li>
                            <img class="vm" src="../img/product/txt_ioc.png"/>
                            <span class="vm"><a>油菜施肥技术</a></span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer_meun">
            <dl>
                <dt><a href="../product.html">产品技术</a></dt>
                <dd></dd>
            </dl>
            <dl>
                <dt><a href="../news.html">新闻中心</a></dt>
                <dd>
                    <span><a href="../qyzx.html">企业咨询</a></span>
                    <span><a href="../jszx.html">技术咨询</a></span>
                    <span><a href="../hydt.html">行业动态</a></span>
                </dd>
            </dl>
            <dl>
                <dt><a href="../company.html">企业信息</a></dt>
                <dd>
                    <span><a href="../gsjj.html">公司简介</a></span>
                    <span><a href="../gsfm.html">公司风貌</a></span>
                    <span><a href="../qysm.html">企业使命</a></span>
                    <span><a href="../zpzl.html">招聘专栏</a></span>
                    <span><a href="../lxwm.html">联系我们</a></span>
                </dd>
            </dl>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
    $(document).ready(function () {
        $(".shop_con_tab > ul >li:eq(0)").click(function () {
            $(".shop_con_tab >ul >li").each(function () {
                $(this).removeClass("on");
            });
            $(this).addClass("on");
            $(".shop_info > div").each(function () {
                $(this).attr("hidden", "hidden");
            });
            $(".shop_info >div:eq(0)").removeAttr("hidden");
        });
        $(".shop_con_tab > ul >li:eq(1)").click(function () {
            $(".shop_con_tab >ul >li").each(function () {
                $(this).removeClass("on");
            });
            $(this).addClass("on");
            $(".shop_info > div").each(function () {
                $(this).attr("hidden", "hidden");
            });
            $(".shop_info >div:eq(1)").removeAttr("hidden");
        });
        $(".shop_con_tab > ul >li:eq(2)").click(function () {
            $(".shop_con_tab >ul >li").each(function () {
                $(this).removeClass("on");
            });
            $(this).addClass("on");
            $(".shop_info > div").each(function () {
                $(this).attr("hidden", "hidden");
            });
            $(".shop_info >div:eq(2)").removeAttr("hidden");
        });
    });
</script>
</html>