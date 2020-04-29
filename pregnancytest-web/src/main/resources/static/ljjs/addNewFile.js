layui.use(['form','layer','laydate','jquery'],function(){
	var form =layui.form
		,layer=layui.layer
		,$=layui.jquery
		,laydate=layui.laydate;


	$.post('addNewFilecx',function(result){

		var str="<option value='0'>--请选择--</option>";
		$(result.nationinfoList).each(function() {
			str+="<option value="+this.nid+">"+this.nation+"</option>";
		})
		$("#mnationality").append(str);
		$("#fnationality").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.papersinfoList).each(function() {
			str+="<option value="+this.pid+">"+this.papers+"</option>";
		})
		$("#midCardType").append(str);
		$("#fidCardType").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.educationinfoList).each(function() {
			str+="<option value="+this.eid+">"+this.education+"</option>";
		})
		$("#feduLevel").append(str);
		$("#meduLevel").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.occupationinfoList).each(function() {
			str+="<option value="+this.oid+">"+this.occupation+"</option>";
		})
		$("#mjob").append(str);
		$("#fjob").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.registeredinfoList).each(function() {
			str+="<option value="+this.rid+">"+this.registered+"</option>";
		})
		$("#maccountType").append(str);
		$("#faccountType").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.checktypeinfoList).each(function() {
			str+="<option value="+this.cid+">"+this.checktype+"</option>";
		})
		$("#K1").append(str);
		str="<option value='0'>--请选择--</option>";
		$(result.hascontentinfoList).each(function() {
			str+="<option value="+this.hid+">"+this.hascontentinfo+"</option>";
		})
		$("#hasContent").append(str);
$("#mid").val(result.newmid);
		form.render('select');

	})


	form.on('submit(demo1)', function(data){
		var user = $('form').serialize();
		$.ajax({
			type:"post",
			data:user,
			url:"addNewFileinsert",
			dataType:"text",
			success:function(result){
				if(result=='true'){
					layer.msg("新增成功");
				}else{
					layer.msg("新增失败");
				}
			}
		})
		return false;
	});


})