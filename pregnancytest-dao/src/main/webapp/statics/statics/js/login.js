layui.use(['form','laytpl'], function(){
    var form = layui.form,
        laytpl = layui.laytpl,
        $=layui.$;

    //监听提交
   /* form.on('submit(formSubmit)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });*/
    //得到用户登录列表(实际项目中应转向指定的Controller)
    $.get('selectUser.action',function (data) {
    	//var data=JSON.parse(data);
        var view = document.getElementById('view');
        var gettpl = document.getElementById("userList").innerHTML;
        laytpl(gettpl).render(data, function (html) {
            view.innerHTML = html;
            form.render('select');
        });
    });

});