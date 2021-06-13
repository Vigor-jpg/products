<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2020/3/1
  Time: 11:57
  To change this template use File | Settings | File Templates.
--%>
<%@page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="id" content="<%=request.getParameter("product_id")%>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>上传首页产品</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link href="../css/bootstrap.min.css?v=3.3.6" rel="stylesheet"/>
    <link href="../css/font-awesome.css?v=4.4.0" rel="stylesheet"/>
    <link href="../css/plugins/iCheck/custom.css" rel="stylesheet"/>
    <link href="../css/animate.css" rel="stylesheet"/>
    <link href="../css/style.css?v=4.1.0" rel="stylesheet"/>
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <form class="form-horizontal" id="product_form" enctype="multipart/form-data">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品名称（必填）</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" disabled="disabled" value="<%=request.getParameter("product_name")%>" name="product_name"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">首页产品描述（必填）</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" name="product_detail"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">首页产品图片</label>
                            <div class="col-sm-8">
                                <input type="file" class="form-control" name="file"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <div class="col-sm-8 col-sm-offset-2">
                                <button class="btn btn-success save" type="button" onsubmit="return false">上传</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 全局js -->
<script src="../js/jquery.min.js?v=2.1.4"></script>
<script src="../js/bootstrap.min.js?v=3.3.6"></script>

<!-- 自定义js -->
<script src="../js/content.js?v=1.0.0"></script>

<!-- iCheck -->
<script src="../js/plugins/iCheck/icheck.min.js"></script>
<script>
    $(document).ready(function () {
        var product_id=$("meta[name='id']").attr('content');
        $(".save").click(function () {
            var data=new FormData($("#product_form")[0]);
            data.append("id",product_id);
            data.append("product_name",$("input[name='product_name']").val());
            $.ajax({
                url:"/product/updateHomeProduct",
                data:data,
                dataType:"json",
                type:"POST",
                processData:false,
                contentType:false,
                success:function (data) {
                    if(data=="true"){
                        alert("修改成功！");
                    }else{
                        alert("修改失败!");
                    }
                },
                error:function () {
                    alert("网络错误！");
                }
            });
        });
    });
</script>
</body>
</html>
