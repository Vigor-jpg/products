<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2020/2/14
  Time: 16:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta name="id" content="<%=request.getParameter("job_id")%>">
    <meta charset="UTF-8">
    <title>修改工作</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link href="../css/bootstrap.min.css?v=3.3.6" rel="stylesheet"/>
    <link href="../css/font-awesome.css?v=4.4.0" rel="stylesheet"/>
    <link href="../css/plugins/iCheck/custom.css" rel="stylesheet"/>
    <link href="../css/animate.css" rel="stylesheet"/>
    <link href="../css/style.css?v=4.1.0" rel="stylesheet"/>
    <script src="../ckeditor/ckeditor.js"></script>
    <script src="../js/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $.ajax({
                url:"/job/getJob",
                data:{"job_id":parseInt($("meta[name='id']").attr("content"))},
                type:"POST",
                dataType:"json",
                success:function (data) {
                    var obj=JSON.parse(data);
                    $("input[name='job_name']").val(obj["job_name"]);
                    $("input[name='job_place']").val(obj["job_place"]);
                    $("input[name='job_kind']").val(obj["job_kind"]);
                    $("input[name='job_time']").val(obj["job_time"]);
                    $("textarea[name='job_demand']").val(obj["job_demand"]);
                    $("textarea[name='job_duty']").val(obj["job_duty"]);
                },
                error:function () {
                    alert("网络错误");
                }
            });
        });
        function submite() {
            if(isNull()){
                var formdata=new FormData($("#news_form")[0]);
                formdata.append("job_id",$("meta[name='id']").attr("content"));
                $.ajax({
                    url:"/job/updateJob",
                    data:formdata,
                    dataType:"json",
                    type:"POST",
                    processData:false,
                    contentType:false,
                    success:function (data) {
                        if(data=="true"){
                            alert("修改成功");
                        }else {
                            alert("修改失败");
                        }
                    },
                    error:function () {
                        alert("网络错误！");
                    }
                });
            }else{
                alert("存在必填项为空");
            }
        }
        function isNull() {
            var i=0;
            $(".chosen").each(function () {
                if($(this).val()==""){
                    i++;
                    return false;
                }
            })
            if(i!=0){
                return false;
            }else {
                return true;
            }
        }
    </script>
</head>
<body>
<form method="post" id="news_form" style="width: 1080px;margin: auto;margin-top: 30px;" class="form-horizontal" enctype="multipart/form-data">
    <div class="form-group">
        <label class="col-sm-2 control-label">工作名称</label>
        <div class="col-sm-4">
            <input type="text" name="job_name" class="form-control chosen"/>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">工作地点</label>
        <div class="col-sm-4">
            <select class="form-control" name="job_place">
                <option>海外</option>
                <option>武汉</option>
                <option>烟台</option>
            </select>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">工作类型</label>
        <div class="col-sm-4">
            <select class="form-control" name="job_kind">
                <option>技术类</option>
                <option>设计类</option>
                <option>职能类</option>
                <option>销售类</option>
            </select>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">工作时间</label>
        <div class="col-sm-4">
            <select class="form-control" name="job_time">
                <option>全职</option>
                <option>兼职</option>
            </select>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <label class="col-sm-2 control-label">工作要求</label>
        <div class="col-sm-10">
            <textarea name="job_demand" class="form-control" /></textarea>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">工作职责</label>
        <div class="col-sm-10">
            <textarea name="job_duty" class="form-control"/></textarea>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
            <button class="btn btn-success" type="button" onsubmit="return false" onclick="submite()">提交</button>
        </div>
    </div>
</form>
</body>
</html>
