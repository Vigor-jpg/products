$(document).ready(function () {
    var tab_list = "<li>\n" +
        "\t\t\t\t\t\t\t\t<a href=\"products/test.html\"><img src=\"\"></a>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"shop_info\">\n" +
        "\t\t\t\t\t\t\t\t\t<h3>三安98988</h3>\n" +
        "\t\t\t\t\t\t\t\t\t<p>肥效持久，利用率高</p>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</li>";
    var pro_list = "<li><a></a></li>";
    var maxPage;
    var target;
    var page;
    $.ajax({
        url: "/product/getProductType",
        type: "post",
        dataType: "json",
        data: {},
        error: function () {
            alert("网络状态不佳，请刷新重试！");
        },
        success: function (data) {
            $(".pro_list li").remove();
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                $(".pro_list").append(pro_list);
                $(".pro_list li:last").find("a").text(obj[i]);
            }
            $(".pro_list li:first").addClass("pro_on");
            page = $(".pages .pages_li .active").text();
            target = $(".pro_list .pro_on").text();
            $.ajax({
                url: "/product/getTabProduct",
                type: "post",
                async: false,
                dataType: "json",
                data: {"page": page, "target": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！!!");
                },
                success: function (data) {
                    $(".pro_shop li").remove();
                    var obj = JSON.parse(data);
                    maxPage = Math.ceil(obj["maxPage"] / 9);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pro_list").on('click', 'li', function () {
        $('.pro_list li').removeClass("pro_on");
        $(this).addClass("pro_on");
        target = $(this).children().text();
        $.ajax({
            url: "/product/getTabProduct",
            type: "post",
            dataType: "json",
            data: {"page": page, "target": target},
            error: function () {
                alert("网络状态不佳，请刷新重试！");
            },
            success: function (data) {
                $(".pro_shop li").remove();
                var obj = JSON.parse(data);
                maxPage = Math.ceil(obj["maxPage"] / 9);
                loadTabNews(obj);
            }
        });
    });
    $(".pages .pages_li:eq(2) a").click(function () {
        var currentPage = $(".pages .pages_li:eq(2) a:eq(2)").text();
        if ($(this).text() > maxPage) {
            alert("最大页数为" + maxPage);
        } else {
            var i = -2;
            page = $(this).text();
            $(".pages_li a").each(function () {
                $(this).removeClass("active");
            });
            if (page >= 3 && page <= maxPage - 2) {
                $(".pages .pages_num a").each(function () {
                    $(this).text(parseInt(page) + parseInt(i));
                    i++;
                });
                $(".pages .pages_num a:eq(2)").addClass("active");
            } else if (currentPage == 4 && page == 2) {
                $(".pages .pages_num a").each(function () {
                    $(this).text(parseInt(page) + parseInt(i) + 1);
                    i++;
                });
                $(".pages .pages_num a:eq(1)").addClass("active");
            } else if (currentPage == maxPage - 3 && page == maxPage - 1) {
                $(".pages .pages_num a").each(function () {
                    $(this).text(parseInt(page) + parseInt(i) - 1);
                    i++;
                });
                $(".pages .pages_num a:eq(3)").addClass("active");
            } else {
                $(this).addClass("active");
            }
            $.ajax({
                url: "/product/getTabProduct",
                type: "post",
                dataType: "json",
                data: {"page": page, "target": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    $(".pro_shop li").remove();
                    var obj = JSON.parse(data);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pages .pages_li:eq(0) a").click(function () {
        $.ajax({
            url: "/news/getTabProduct",
            type: "post",
            dataType: "json",
            data: {"page": 1, "target": target},
            error: function () {
                alert("网络状态不佳，请刷新重试！");
            },
            success: function (data) {
                var i = 1;
                $(".pages .pages_num a").each(function () {
                    $(this).text(i);
                    i++;
                });
                $(".pages_num a").each(function () {
                    $(this).removeClass("active");
                });
                page = 1;
                $(".pages .pages_num a:eq(0)").addClass("active");
                $(".pro_shop li").remove();
                var obj = JSON.parse(data);
                loadTabNews(obj);
            }
        });
    });
    $(".pages .pages_li:eq(1) a").click(function () {
        if (page > 1) {
            $.ajax({
                url: "/news/getTabProduct",
                type: "post",
                dataType: "json",
                data: {"page": page - 1, "target": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    var currentObj = $(".pages_num .active");
                    $(".pages_num a").each(function () {
                        $(this).removeClass("active");
                    });
                    if (page < 4 || page > maxPage - 2) {
                        currentObj.prev("a").addClass("active");
                    } else {
                        var i = -3;
                        $(".pages .pages_num a").each(function () {
                            $(this).text(parseInt(page) + parseInt(i));
                            i++;
                        });
                        $(".pages_num a:eq(2)").addClass("active");
                    }
                    page--;
                    $(".box_li").remove();
                    var obj = JSON.parse(data);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pages .pages_li:eq(3) a").click(function () {
        if (page < maxPage) {
            $.ajax({
                url: "/product/getTabProduct",
                type: "post",
                dataType: "json",
                data: {"page": parseInt(page) + 1, "target": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    var currentObj = $(".pages_num .active");
                    $(".pages_num a").each(function () {
                        $(this).removeClass("active");
                    });
                    if (page < 3 || page > maxPage - 3) {
                        currentObj.next("a").addClass("active");
                    } else {
                        var i = -1;
                        $(".pages .pages_num a").each(function () {
                            $(this).text(parseInt(page) + parseInt(i));
                            i++;
                        });
                        $(".pages_num a:eq(2)").addClass("active");
                    }
                    page++;
                    $(".pro_shop li").remove();
                    var obj = JSON.parse(data);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pages .pages_li:eq(4) a").click(function () {
        $.ajax({
            url: "/product/getTabProduct",
            type: "post",
            dataType: "json",
            data: {"page": maxPage, "target": target},
            error: function () {
                alert("网络状态不佳，请刷新重试！");
            },
            success: function (data) {
                var i = maxPage - 4;
                $(".pages .pages_num a").each(function () {
                    $(this).removeClass("active");
                    $(this).text(i);
                    i++;
                });
                $(".pages_num a:eq(4)").addClass("active");
                $(".pro_shop li").remove();
                var obj = JSON.parse(data);
                loadTabNews(obj);
                page = maxPage;
            }
        });
    });

    function loadTabNews(obj) {
        for (var i = 0; i < obj["TabProduct"].length; i++) {
            $(".pro_shop").append(tab_list);
            $(".pro_shop li:last").find("img").attr("src", obj["TabProduct"][i]["product_img_path"]);
            $(".pro_shop li:last").find("h3").text(obj["TabProduct"][i]["product_name"]);
            $(".pro_shop li:last").find("p").text(obj["TabProduct"][i]["product_detail"] + "……");
            $(".pro_shop li:last").find("a").attr("href", obj["TabProduct"][i]["product_url"]);
        }
    }
});