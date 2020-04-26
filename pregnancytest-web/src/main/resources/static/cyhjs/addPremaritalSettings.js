layui.use(['form','layer','laydate','jquery'],function(){
	var form =layui.form
		,layer=layui.layer
		,$=layui.jquery
		,laydate=layui.laydate;


	form.on('submit(demo1)', function(data){
		var user = $('form').serialize();
		$.ajax({
			type:"post",
			data:user,
			url:"addLabwork",
			dataType:"text",
			success:function(result){
				if(result=='true'){
					layer.msg("新增成功",{time:'1000'},function(){

						parent.layer.close(parent.layer.index);
					});
				}else{
					layer.msg("新增失败");
				}
			}
		})
		return false;
	});


})