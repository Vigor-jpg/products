<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2020/2/14
  Time: 16:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>修改新闻</title>
    <meta name="news_id" content="<%=request.getParameter("news_id")%>">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="shortcut icon" href="favicon.ico">
    <link href="../css/bootstrap.min.css?v=3.3.6" rel="stylesheet"/>
    <link href="../css/font-awesome.css?v=4.4.0" rel="stylesheet"/>
    <link href="../css/plugins/iCheck/custom.css" rel="stylesheet"/>
    <link href="../css/animate.css" rel="stylesheet"/>
    <link href="../css/style.css?v=4.1.0" rel="stylesheet"/>
    <script src="../ckeditor/ckeditor.js"></script>
    <script src="../js/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            CKEDITOR.replace( 'news_txt',{height:'700px'});
            var news_img_path="";
            var news_url="";
            var news_time="";
            var news_id=$("meta[name='news_id']").attr("content");
            $.ajax({
                url:"/news/editNews",
                data:{"news_id":news_id},
                dataType:"json",
                type:"POST",
                success:function (data) {
                    alert(data);
                    var obj=JSON.parse(data);
                    $("input[name='news_title']").val(obj["news_title"]);
                    $("input[name='news_target']").val(obj["news_target"]);
                    $("input[name='news_from']").val(obj["news_from"]);
                    $("input[name='news_detail']").val(obj["news_detail"]);
                    news_img_path=obj["news_img_path"];
                    news_url=obj["news_url"];
                    news_time=obj["news_time"];
                    CKEDITOR.instances.description.setData(obj["news_txt"]);
                }
            });
            $(".submit").click(function () {
                var data=new FormData($("#news_form")[0]);
                data.append("news_img_path",news_img_path);
                data.append("news_url",news_url);
                data.append("news_time",news_time);
                data.append("news_txt",CKEDITOR.instances.description.getData());
                data.append("id",news_id);
                $.ajax({
                    url:"/news/updateNews",
                    data:data,
                    dataType:"json",
                    type:"post",
                    processData:false,
                    contentType:false,
                    success:function (data) {
                        if(data=="true"){
                            alert("修改成功！");
                        }
                    },
                    error:function (data) {
                        alert(data.status);
                    }
                });
            });
        });
    </script>
</head>
<body>
<form method="post" id="news_form" style="width: 1080px;margin: auto;margin-top: 30px;" class="form-horizontal" enctype="multipart/form-data">
    <div class="form-group">
        <label class="col-sm-2 control-label">文章题目</label>
        <div class="col-sm-4">
            <input type="text" name="news_title" class="form-control chosen"/>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">文章分类</label>
        <div class="col-sm-4">
            <select class="form-control" name="news_target">
                <option>企业新闻</option>
                <option>技术咨询</option>
                <option>行业动态</option>
            </select>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">文章来源</label>
        <div class="col-sm-4">
            <input type="text" name="news_from" class="form-control chosen"/>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">文章概述</label>
        <div class="col-sm-10">
            <input type="text" name="news_detail" class="form-control chosen"/>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">封面图片</label>
        <div class="col-sm-10">
            <input type="file" name="file" class="form-control chosen"/>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">文章正文</label>
        <div class="col-sm-10">
            <textarea name="news_txt" id="description"/></textarea>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
            <button class="btn btn-success submit" type="button" onsubmit="return false">保存修改</button>
        </div>
    </div>
</form>
</body>
</html>
