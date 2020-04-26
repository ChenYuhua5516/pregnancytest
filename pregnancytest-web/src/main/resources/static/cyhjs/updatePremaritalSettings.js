var uid;
function getId(id){
	uid=id;
}
layui.use(['form','layer','laydate','jquery'],function(){
	var form =layui.form
	,layer=layui.layer
	,$=layui.jquery
	,laydate=layui.laydate;
          uid=parent.shuju.autoid;
		$.post("findLabWorkById",{"autoid":uid},function(result){
			form.val("formFilter",result);
		})
	
	
	form.on('submit(demo1)', function(data){
		var user = $('form').serialize();
		$.ajax({
			type:"post",
			data:user,
			url:"updateLabworkById",
			dataType:"text",
			success:function(result){
				if(result=='true'){
					layer.msg("修改成功",{time:'1000'},function(){
						
						parent.layer.close(parent.layer.index);
					});
					
				}else{
				layer.msg("修改失败");	
				}
			}
		})
		  return false; 
		});
	
	
})