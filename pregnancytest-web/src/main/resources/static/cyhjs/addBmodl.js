layui.use(['jquery','form','upload'], function(){
    var $ = layui.jquery;
    var form=layui.form;
    var upload = layui.upload;
alert("aa");

    //普通图片上传
    var uploadInst = upload.render({
        elem: '#test1'
        ,url: 'upload' //改成您自己的上传接口
        ,multiple: true
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo1').attr('src', result); //图片链接（base64）
            });
        }
        ,done: function(res){
            //如果上传失败
            if(res.code > 0){
                return layer.msg('上传失败');
            }
            //上传成功
            layer.msg(res.msg);
            // alert("上传成功"+res.msg);
            document.getElementById("img_url").value = res.data.src;
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                uploadInst.upload();
            });
        }
    });
    form.on('submit(demo1)', function (data) {

        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        })
        var index = layer.msg('提交中，请稍候', {icon: 16, time: false, shade: 0.8});
        var context = data.field;
        var url = "/saveOrUpdate";

        $.ajax({
            type: 'POST',
            url: "/saveOrUpdate",
            data: context,
            dataType: "text",
            success: function (data) {

                if (data == 0) {
                    parent.layer.msg("操作成功", {icon: 6});

                } else {
                    parent.layer.msg("操作失败", {icon: 5});
                }
            }, error: function () {
                parent.layer.msg("操作失败", {icon: 5});
            }
        });
        return false;
    });

})