$(document).ready(function () {
    var width = $(".view_news").width();
    var page = $(".pages .pages_li .active").text();
    var target = $(".tab .show").text();
    var tab_list = "<li class=\"box_li\">\n" +
        "\t\t\t\t\t\t\t\t<a>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"box_time\"><time class=\"news_time\"><b>20</b></time></div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"box_pic\"></div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"box_txt\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<h5>温氏技术中心通过国家技术中心2019年评价</h5>\n" +
        "\t\t\t\t\t\t\t\t\t\t<p>温氏创新技术能力及技术中心管理水平持续获……</p>\n" +
        "\t\t\t\t\t\t\t\t\t\t<span class=\"iconfont icon-right3\"></span>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t</li>";
    var maxPage;
    $.ajax({
        url: "/news/getHotNews",
        type: "post",
        dataType: "json",
        error: function () {
            alert("!!!");
        },
        success: function (data) {
            var obj = JSON.parse(data);
            var i = 0;
            $(".view_news > ul >li").each(function () {
                $(this).find(".news_hot_txt .news_time").children().replaceWith(dayChange(obj[i]["news_time"]));
                $(this).find(".news_hot_pic").css("background-image", "url(" + obj[i]["news_img_path"] + ")");
                $(this).find(".news_hot_txt > h5 >a").text(obj[i]["news_title"]);
                $(this).find(".news_hot_txt > h5 >a").attr("href", obj[i]["news_url"]);
                $(this).find(".news_hot_pic >a").attr("href", obj[i]["news_url"]);
                $(this).find(".news_hot_txt p").text(obj[i]["news_detail"] + "……");
                $(this).find(".news_hot_txt > h6 > em").text(obj[i]["news_targt"]);
                $(this).find(".news_hot_txt > h6 > span").text("来源于：" + obj[i]["news_from"]);
                i++;
            });
        }
    });
    $.ajax({
        url: "/news/getTabNews",
        type: "post",
        dataType: "json",
        data: {"page": page, "target": target},
        error: function () {
            alert("网络状态不佳，请刷新重试！");
        },
        success: function (data) {
            $(".box_li").remove();
            var obj = JSON.parse(data);
            maxPage = Math.ceil(obj["maxPage"] / 6);
            loadTabNews(obj);
        }
    });

    function dayChange(time) {
        var timeArray = time.split("-");
        return "<b>" + timeArray[2] + "</b>" + timeArray[0] + "-" + timeArray[1];
    }

    $(".pages .pages_li:eq(2) a").click(function () {
        alert(maxPage);
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
                alert(page);
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
                url: "/news/getTabNews",
                type: "post",
                dataType: "json",
                data: {"page": page, "targt": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    alert(data);
                    $(".box_li").remove();
                    var obj = JSON.parse(data);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pages .pages_li:eq(0) a").click(function () {
        $.ajax({
            url: "/news/getTabNews",
            type: "post",
            dataType: "json",
            data: {"page": 1, "targt": target},
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
                alert(data);
                $(".box_li").remove();
                var obj = JSON.parse(data);
                loadTabNews(obj);
            }
        });
    });
    $(".pages .pages_li:eq(1) a").click(function () {
        if (page > 1) {
            $.ajax({
                url: "/news/getTabNews",
                type: "post",
                dataType: "json",
                data: {"page": page - 1, "targt": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    alert(data);
                    var currntObj = $(".pages_num .active");
                    $(".pages_num a").each(function () {
                        $(this).removeClass("active");
                    });
                    if (page < 4 || page > maxPage - 2) {
                        currntObj.prev("a").addClass("active");
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
                url: "/news/getTabNews",
                type: "post",
                dataType: "json",
                data: {"page": parseInt(page) + 1, "targt": target},
                error: function () {
                    alert("网络状态不佳，请刷新重试！");
                },
                success: function (data) {
                    var currntObj = $(".pages_num .active");
                    $(".pages_num a").each(function () {
                        $(this).removeClass("active");
                    });
                    if (page < 3 || page > maxPage - 3) {
                        currntObj.next("a").addClass("active");
                    } else {
                        var i = -1;
                        $(".pages .pages_num a").each(function () {
                            $(this).text(parseInt(page) + parseInt(i));
                            i++;
                        });
                        $(".pages_num a:eq(2)").addClass("active");
                    }
                    page++;
                    $(".box_li").remove();
                    var obj = JSON.parse(data);
                    loadTabNews(obj);
                }
            });
        }
    });
    $(".pages .pages_li:eq(4) a").click(function () {
        $.ajax({
            url: "/news/getTabNews",
            type: "post",
            dataType: "json",
            data: {"page": maxPage, "targt": target},
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
                $(".box_li").remove();
                var obj = JSON.parse(data);
                loadTabNews(obj);
                page = maxPage;
            }
        });
    });

    function loadTabNews(obj) {
        for (var i = 0; i < obj["TabNews"].length; i++) {
            $(".box > ul").append(tab_list);
            $(".box .box_li:last").find(".box_time .news_time").children().replaceWith(dayChange(obj["TabNews"][i]["news_time"]));
            $(".box .box_li:last").find(".box_pic").css("background-image", "url(" + obj["TabNews"][i]["news_img_path"] + ")");
            $(".box .box_li:last").find(".box_txt h5").text(obj["TabNews"][i]["news_title"]);
            $(".box .box_li:last").find(".box_txt p").text(obj["TabNews"][i]["news_detail"] + "……");
            $(".box .box_li:last").find("a").attr("href", obj["TabNews"][i]["news_url"]);
        }
    }

    $(".right_con span").click(function () {
        if (!$(".view_news ul").is(":animated")) {
            var obj = $(".view_news ul");
            var view = $(".view_news");
            var ul_left = obj.offset().left;
            var view_left = view.offset().left;
            if ($(this).hasClass("disabled") == false) {
                var item = $(".bx_pager .on");
                item.removeClass("on");
                item.closest("div").next("div").children("a").addClass("on");
                obj.animate({left: "-=1144px"});
            }

            if (ul_left + 3 * width - 10 < view_left) {
                $(this).addClass("disabled");
            }
            if (ul_left - 10 < view_left) {
                $(".left_con .disabled").removeClass("disabled");
            }
        }
    });
    $(".left_con span").click(function () {
        if (!$(".view_news ul").is(":animated")) {
            var obj = $(".view_news ul");
            var view = $(".view_news");
            var ul_left = obj.offset().left;
            var view_left = view.offset().left;
            if ($(this).hasClass("disabled") == false) {
                var item = $(".bx_pager .on");
                item.removeClass("on");
                item.closest("div").prev("div").children("a").addClass("on");
                obj.animate({left: "+=1144px"});
            }
            if (ul_left + width + 10 > view_left) {
                $(this).addClass("disabled");
            }
            if (ul_left + 4 * width - 10 > view_left) {
                $(".right_con .disabled").removeClass("disabled");
            }
        }
    });
    $(".bx_pager .pg_item").click(function () {
        var obj = $(".bx_pager .on");
        var item = $(this).children("a");
        var temp = (item.attr("tabindex") - obj.attr("tabindex")) * 1144;
        if (!$(".view_news ul").is(":animated")) {
            obj.removeClass("on");
            $(this).children("a").addClass("on");
            $(".view_news ul").animate({left: "-=" + temp + "px"}, 300, function () {
                var ul_left = $(".view_news ul").offset().left;
                var view_left = $(".view_news").offset().left;
                if (ul_left + 10 > view_left) {
                    $(".left_con span").addClass("disabled");
                } else if (ul_left + width - 10 < view_left) {
                    $(".left_con .disabled").removeClass("disabled");
                }
                if (ul_left + 3 * width + 10 > view_left) {
                    $(".right_con .disabled").removeClass("disabled");
                } else if (ul_left + 4 * width - 10 < view_left) {
                    $(".right_con span").addClass("disabled");
                }
            });

        }
    });
});

