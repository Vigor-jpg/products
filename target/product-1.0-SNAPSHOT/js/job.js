$(document).ready(function () {
    var jobItem="<div class=\"job_box\">\n" +
        "\t\t\t\t\t    \t\t<h1>销售经理</h1>\n" +
        "\t\t\t\t\t    \t\t<p>海外 | 武汉 | 职能类 | 全职 | 2019/07/25</p>\n" +
        "\t\t\t\t\t    \t\t<div class=\"job_box_txt\">\n" +
        "\t\t\t\t\t    \t\t\t<span>工作要求</span>\n" +
        "\t\t\t\t\t    \t\t\t<pre class='job_box_demand'>\n" +
        "1、会计、财务相关专业，本科以上学历，中级职称；\n" +
        "2、有大型或上市公司财务管理工作经验，会计业务娴熟、专业度强，擅长处理各类财务报表数据等；\n" +
        "3、有一定资本运作概念，融资能力或有成功的融资项目经验为佳；\n" +
        "4、英语熟悉，阅读无障碍，基本的英语口语交流；\n" +
        "5、对数据敏感，原则性强、责任心强、较好的组织、协调、沟通能力。\n" +
        "\t\t\t\t\t    \t\t\t</pre>\n" +
        "\t\t\t\t\t    \t\t</div>\n" +
        "\t\t\t\t\t    \t\t<div class=\"job_box_txt\">\n" +
        "\t\t\t\t\t    \t\t\t<span>岗位职责</span>\n" +
        "\t\t\t\t\t    \t\t\t<pre class='job_box_duty'>\n" +
        "1、协助财务总做好公司财务统筹管理工作，达成绩效目标。\n" +
        "2、参与公司战略规划，提供财务预决算报表，为公司战略规划提供有效的财务数据支撑；\n" +
        "3、根据公司经营结果及发展需要，组织业绩筹划；\n" +
        "4、运用税务政策做好税务筹划及日常税务事务监管；\n" +
        "5、建立健全财务管理制度，有效控制资金风险；\n" +
        "6、按时、准确提供财务报表数据，为数据真实性、准确性、有效性负责；\n" +
        "7、协助财务总做好资金增值管理、项目融资；\n" +
        "8、与相关方保持有效的沟通与协助等。\n" +
        "\t\t\t\t\t    \t\t\t</pre>\n" +
        "\t\t\t\t\t    \t\t</div>\n" +
        "\t\t\t\t\t    \t\t<p class=\"clr\"></p>\n" +
        "\t\t\t\t\t    \t</div>";
    var jobPlace=$(".job_place .active span").text();
    var jobKind=$(".job_kind .active span").text();
    var jobTime=$(".job_time .active span").text();
    $.ajax({
        url:"/job/getJobPlace",
        data:{},
        dataType:"json",
        error:function () {
            alert("网络错误，请刷新重试！");
        },
        success: function (data) {
            var obj=JSON.parse(data);
            for(var i=0;i<obj.length;i++){
                $(".job_place").append("<div class=\"job_title_item\">\n" +
                    "\t\t\t\t\t\t\t\t    <span>"+obj[i]+"</span>\n" +
                    "\t\t\t\t\t\t\t    </div>");
            }
            $(".job_place").append("<p class=\"clr\"></p>");
        }
    });
    $.ajax({
        url:"/job/getJobDetails",
        data:{"job_place":jobPlace,"job_kind":jobKind,"job_time":jobTime},
        dataType:"json",
        error:function () {
            alert("网络错误，请刷新重试！");
        },
        success: function (data) {
            var obj=JSON.parse(data);
            $(".job_box").remove();
            loadJobDetails(obj);
        }
    });
    $(".job_place").on('click','.job_title_item',function () {
        $(".job_place .job_title_item").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        jobPlace=$(this).children().text();
        $.ajax({
            url:"/job/getJobDetails",
            data:{"job_place":jobPlace,"job_kind":jobKind,"job_time":jobTime},
            dataType:"json",
            error:function () {
                alert("网络错误，请刷新重试！");
            },
            success: function (data) {
                var obj=JSON.parse(data);
                $(".job_box").remove();
                loadJobDetails(obj);
            }
        });
    });
    $(".job_kind .job_title_item").click(function () {
        $(".job_kind .job_title_item").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        jobKind=$(this).children().text();
        $.ajax({
            url:"/job/getJobDetails",
            data:{"job_place":jobPlace,"job_kind":jobKind,"job_time":jobTime},
            dataType:"json",
            error:function () {
                alert("网络错误，请刷新重试！");
            },
            success: function (data) {
                var obj=JSON.parse(data);
                $(".job_box").remove();
                loadJobDetails(obj);
            }
        });
    });
    $(".job_time .job_title_item").click(function () {
        $(".job_time .job_title_item").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        jobTime=$(this).children().text();
        $.ajax({
            url:"/job/getJobDetails",
            data:{"job_place":jobPlace,"job_kind":jobKind,"job_time":jobTime},
            dataType:"json",
            error:function () {
                alert("网络错误，请刷新重试！");
            },
            success: function (data) {
                var obj=JSON.parse(data);
                $(".job_box").remove();
                loadJobDetails(obj);
            }
        });
    });
    function loadJobDetails(obj) {
        for(var i=0;i<obj.length;i++){
            $(".job_content").prepend(jobItem);
            $(".job_content .job_box:first").find("h1").text(obj[i]["job_name"]);
            $(".job_content .job_box:first").find("p:first").text(jobDetailsChange(obj[i]));
            $(".job_content .job_box:first").find(".job_box_demand").text(obj[i]["job_demand"]);
            $(".job_content .job_box:first").find(".job_box_duty").text(obj[i]["job_duty"]);
        }
    }
    function jobDetailsChange(jobDetail) {
        return jobDetail["job_place"]+" | "+jobDetail["job_kind"]+" | "+jobDetail["job_time"]+" | "+jobDetail["job_release_time"];
    }
});