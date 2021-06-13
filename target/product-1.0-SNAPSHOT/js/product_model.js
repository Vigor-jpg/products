$(document).ready(function () {
    var product_li = "<li>\n" +
        "                            <a href=\"products/test.html\"><img src=\"../img/product/d3f50fdd8ff91f06908c66f1415adc8e.png\"></a>\n" +
        "                            <div class=\"other_shop_info\">\n" +
        "                                <h3>三安98988</h3>\n" +
        "                                <p>肥效持久，利用率高</p>\n" +
        "                            </div>\n" +
        "                        </li>";
    var news_li = "<li>\n" +
        "\t\t\t\t\t\t\t\t\t<img class=\"vm\" src=\"../img/product/txt_ioc.png\" />\n" +
        "\t\t\t\t\t\t\t\t\t<span class=\"vm\"><a href=''>油菜施肥技术</a></span>\n" +
        "\t\t\t\t\t\t\t\t</li>";
    var product_target = $(".detail_con a input").val();
    $.ajax({
        url: "/product/getTabProduct",
        data: {"target": product_target, "page": 1},
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var obj = JSON.parse(data);
            $(".other_pro_shop li").remove();
            var length = 3;
            if (obj["TabProduct"].length < 3) {
                length = obj["TabProduct"].length;
            }
            for (var i = 0; i < length; i++) {
                $(".other_pro_shop").append(product_li);
                $(".other_pro_shop li:last").find("a").attr("href", obj["TabProduct"][i]["product_url"]);
                $(".other_pro_shop li:last").find("img").attr("src", "../" + obj["TabProduct"][i]["product_img_path"]);
                $(".other_pro_shop li:last").find("h3").text(obj["TabProduct"][i]["product_name"]);
                $(".other_pro_shop li:last").find("p").text(obj["TabProduct"][i]["product_detail"]);
            }
        },
        error: function () {
            alert("网络错误！");
        }
    });

    $.ajax({
        url: "/news/getTabNews",
        data: {"target": "技术咨询", "page": 1},
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var obj = JSON.parse(data);
            $(".txt_list li").remove();
            for (var i = 0; i < obj["TabNews"].length; i++) {
                $(".txt_list").append(news_li);
                $(".txt_list li:last").find("a").text(obj["TabNews"][i]["news_title"]);
                $(".txt_list li:last").find("a").attr("href", obj["TabNews"][i]["news_url"]);
            }
        },
        error: function () {
            alert("网络错误！");
        }
    });
});