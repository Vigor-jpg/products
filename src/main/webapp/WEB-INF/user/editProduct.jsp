<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2020/2/16
  Time: 16:01
  To change this template use File | Settings | File Templates.
--%>
<%@page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="id" content="<%=request.getParameter("product_id")%>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>修改产品</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="shortcut icon" href="favicon.ico">
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
                                <input type="text" name="product_name" class="form-control">
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品分类（必填）</label>
                            <div class="col-sm-8">
                                <input type="text" name="product_target" class="form-control"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品描述（必填）</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" name="product_detail"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品概述</label>
                            <div class="col-sm-8">
                                <textarea class="form-control" name="product_descrip"></textarea>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品规格</label>
                            <div class="col-sm-8">
                                <textarea type="text" class="form-control" name="product_size"></textarea>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">其他说明</label>
                            <div class="col-sm-8">
                                <textarea type="text" class="form-control" name="product_other"></textarea>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品图片（必填）</label>
                            <div class="col-sm-8">
                                <input type="file" class="form-control" name="file"/>
                            </div>
                        </div>
                        <div class="hr-line-dashed"></div>
                        <div class="form-group">
                            <div class="col-sm-8 col-sm-offset-2">
                                <button class="btn btn-success save" type="button" onsubmit="return false">保存修改</button>
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
        var product_img_path="";
        var product_url="";
        $.ajax({
            data:{"product_id":product_id},
            url:"/product/editProduct",
            dataType:"json",
            type:"POST",
            success:function (data) {
                var obj=JSON.parse(data);
                $("input[name='product_name']").val(obj["product_name"]);
                $("input[name='product_target']").val(obj["product_target"]);
                $("input[name='product_detail']").val(obj["product_detail"]);
                $("textarea[name='product_descrip']").val(obj["product_descrip"]);
                $("textarea[name='product_other']").val(obj["product_other"]);
                $("textarea[name='product_size']").val(obj["product_size"]);
                product_img_path=obj["product_img_path"];
                product_url=obj["product_url"];
            }
        });
        $(".save").click(function () {
            var data=new FormData($("#product_form")[0]);
            data.append("id",product_id);
            data.append("product_img_path",product_img_path);
            data.append("product_url",product_url);
            $.ajax({
                url:"/product/updateProduct",
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
