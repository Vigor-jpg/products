$(document).ready(function () {
    var intro1 = "<div class=\"intro-line\">\n" +
        "\t\t\t\t    \t<div class=\"intro-box\">\n" +
        "\t\t\t\t\t\t    <div class=\"intro-detail\">\n" +
        "\t\t\t\t\t\t\t    <div class=\"intro-box-detail\">\n" +
        "\t\t\t\t\t\t\t        <h1>肥料助剂</h1>\n" +
        "\t\t\t\t\t\t            <p>化肥助剂是化肥生产过程中不可或缺的功能性材料。在化肥助剂领域，主要产品有防结剂、多功能包裹剂、造粒改良剂、磷矿石浮选剂、节能降耗助剂等，主要有改善化肥产品品质、降低化肥生产能耗、</p>\n" +
        "\t\t\t\t\t                <div><a>了解详情></a></div>\n" +
        "\t\t\t\t\t\t        </div>\n" +
        "\t\t\t\t\t\t    </div>\n" +
        "\t\t\t\t\t    </div>\n" +
        "\t\t\t\t\t    <div class=\"intro-box\">\n" +
        "\t\t\t\t\t\t    <img class=\"intro-box-img\" src=\"\">\n" +
        "\t\t\t\t\t    </div>\n" +
        "\t\t\t\t    </div>";
    var intro2 = "<div class=\"intro-line\">\n" +
        "\t\t\t\t\t    <div class=\"intro-box\">\n" +
        "\t\t\t\t\t\t    <img class=\"intro-box-img\" src=\"\">\n" +
        "\t\t\t\t\t    </div>\n" +
        "\t\t\t\t\t    <div class=\"intro-box\">\n" +
        "\t\t\t\t\t\t    <div class=\"intro-detail\">\n" +
        "\t\t\t\t\t\t\t    <div class=\"intro-box-detail\">\n" +
        "\t\t\t\t\t\t\t        <h1>肥料助剂</h1>\n" +
        "\t\t\t\t\t\t            <p>化肥助剂是化肥生产过程中不可或缺的功能性材料。在化肥助剂领域，主要产品有防结剂、多功能包裹剂、造粒改良剂、磷矿石浮选剂、节能降耗助剂等，主要有改善化肥产品品质、降低化肥生产能耗、</p>\n" +
        "\t\t\t\t\t                <div><a>了解详情></a></div>\n" +
        "\t\t\t\t\t\t        </div>\n" +
        "\t\t\t\t\t\t    </div>\n" +
        "\t\t\t\t\t    </div>\n" +
        "\t\t\t\t    </div>";
    var news1 = "<div class=\"news-line\">\n" +
        "\t\t\t\t\t\t<div class=\"news-box\">\n" +
        "\t\t\t\t\t\t\t<img class=\"news-img\" src=\"img/home/part3/20200127201150.png\"/>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"news-box\">\n" +
        "\t\t\t\t\t\t\t<div class=\"news-detail\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"news-box-detail\">\n" +
        "\t\t\t\t\t\t\t\t\t<time class=\"news_time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<b>20</b>2020/01\n" +
        "\t\t\t\t\t\t\t\t\t</time>\n" +
        "\t\t\t\t\t\t\t\t\t<h3>暖心聚力 共克时艰！富邦股份及控股股东捐赠100万元！</h3>\n" +
        "\t\t\t\t\t\t\t\t\t<p>大年初三，为了支持应城市抗击疫情，富邦股份及应城富邦立即启动紧急决策程序，决定通过应城市慈善会向应城市有关部门合计捐赠100万元人民币（款项已到账）。富邦股份作为本土上市企业，愿与全体应城人民一起，在党和政府的领导下，众志成城、守望相助，暖心聚力 共克时艰，携手助力疫情防控，同舟共济渡过难关！</p>\n" +
        "\t\t\t\t\t\t\t\t    <a class=\"news-btn\">查看详情</a>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>";
    var news2 = "<div class=\"news-line\">\n" +
        "\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t<div class=\"news-box\">\n" +
        "\t\t\t\t\t\t\t<div class=\"news-detail\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"news-box-detail\">\n" +
        "\t\t\t\t\t\t\t\t\t<time class=\"news_time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<b>20</b>2020/01\n" +
        "\t\t\t\t\t\t\t\t\t</time>\n" +
        "\t\t\t\t\t\t\t\t\t<h3>暖心聚力 共克时艰！富邦股份及控股股东捐赠100万元！</h3>\n" +
        "\t\t\t\t\t\t\t\t\t<p>大年初三，为了支持应城市抗击疫情，富邦股份及应城富邦立即启动紧急决策程序，决定通过应城市慈善会向应城市有关部门合计捐赠100万元人民币（款项已到账）。富邦股份作为本土上市企业，愿与全体应城人民一起，在党和政府的领导下，众志成城、守望相助，暖心聚力 共克时艰，携手助力疫情防控，同舟共济渡过难关！</p>\n" +
        "\t\t\t\t\t\t\t\t    <a class=\"news-btn\">查看详情</a>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"news-box\">\n" +
        "\t\t\t\t\t\t\t<img class=\"news-img\" src=\"img/home/part3/20200127201150.png\"/>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>";
    $.ajax({
        url: "/news/getHomeNews",
        data: {},
        dataType: "json",
        error: function () {
            alert("网络错误，请刷新重试！");
        },
        success: function (data) {
            var obj = JSON.parse(data);
            $(".news-line").remove();
            for (var i = 0; i < obj.length; i++) {
                if (i % 2 == 1) {
                    $(".news").append(news1);
                } else {
                    $(".news").append(news2);
                }
                $(".news-line:last").find(".news-img").attr("src", obj[i]["news_img_path"]);
                $(".news-line:last").find(".news-time").text(dayChange(obj[i]["news_time"]));
                $(".news-line:last").find(".news-box-detail h3").text(obj[i]["news_name"]);
                $(".news-line:last").find(".news-box-detail p").text(obj[i]["news_detail"]);
                $(".news-line:last").find(".news-box-detail a").attr("href", obj[i]["news_url"]);
            }
        }
    });
    $.ajax({
        url: "/product/getHomeProduct",
        data: {},
        dataType: "json",
        error: function () {
            alert("网络错误，请刷新重试！");
        },
        success: function (data) {
            var obj = JSON.parse(data);
            $(".intro-line").remove();
            for (var i = 0; i < obj.length; i++) {
                if (i % 2 == 1) {
                    $(".intro").append(intro1);
                } else {
                    $(".intro").append(intro2);
                }
                $(".intro-line:last").find(".intro-box-img").attr("src", obj[i]["product_img_path"]);
                $(".intro-line:last").find(".intro-box-detail h1").text(obj[i]["product_name"]);
                $(".intro-line:last").find(".intro-box-detail p").text(obj[i]["product_detail"]);
                $(".intro-line:last").find(".intro-box-detail a").attr("href", obj[i]["product_url"]);
            }
        }
    });

    function dayChange(time) {
        var timeArray = time.split("-");
        return "<b>" + timeArray[2] + "</b>" + timeArray[0] + "-" + timeArray[1];
    }
});