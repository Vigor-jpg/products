$(document).ready(function () {
    var product_head = "<li><a href=\"product.html\" target=\"_blank\">公司简介</a></li>";
    var product_footer = "<span><a href=\"product.html\">有机农药</a></span>";
    $.ajax({
        url: "/product/getProductType",
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            var obj = JSON.parse(data);
            $(".main-header li:eq(1) ul li").remove();
            $(".footer_meun dl:eq(0) dd span").remove();
            var length = 5;
            if (obj.length < 5) {
                length = obj.length;
            }
            for (var i = 0; i < length; i++) {
                $(".main-header li:eq(1) ul").append(product_head);
                $(".main-header li:eq(1) ul li:last").find("a").text(obj[i]);
                $(".footer_meun dl:eq(0) dd").append(product_footer);
                $(".footer_meun dl:eq(0) dd span:last").find("a").text(obj[i]);
            }
        }
    });
    $(".main-header-item").mouseover(function () {
        $(this).children("div").css("display", "block");
    });
    $(".main-header-item").mouseout(function () {
        $(this).children("div").css("display", "none");
    });
});
