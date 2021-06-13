$(document).ready(function () {
    var li = " <li>\n" +
        "                    <h2 style=\"overflow: hidden\"><a href=\"#\">云天下2020年春节放假安排</a></h2>\n" +
        "                    <p>jhjjjjjjjjjjjjjjjjjjjj</p>\n" +
        "                </li>";
    var target = $(".content_news_top p").text().split("：")[2];
    alert(target);
    $.ajax({
        data: {"target": target, "page": 1},
        url: "/news/getTabNews",
        dataType: "JSON",
        type: "post",
        success: function (data) {
            var obj = JSON.parse(data);
            $(".content_more_ul li").remove();
            for (var i = 0; i < obj["TabNews"].length; i++) {
                $(".content_more_ul").append(li);
                $(".content_more_ul li:last").find("h2 a").attr("href", obj["TabNews"][i]["news_url"]);
                $(".content_more_ul li:last").find("h2 a").text(obj["TabNews"][i]["news_title"]);
                $(".content_more_ul li:last").find("p").text("发表日期：  " + obj["TabNews"][i]["news_time"]);
            }
        }
    });
});