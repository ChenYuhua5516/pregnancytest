 $(function(){
		 $.post("${pageContext.request.contextPath}/smTemplates.action",{},function(data){
			 $(".w").remove();
			 var str=JSON.parse(data);
			for (var i = 0; i < str.length; i++) {
				var fun = 'hq('+str[i].id+',"'+str[i].neiRong+'")';
					$("#tr1").append("<tr class=w><td style='width: 80px; text-align: center;'>"+str[i].id+"</td><td class='td' onclick='"+fun+";' style='width: 700px; text-align: left;'><textarea  readonly='readonly'>"+str[i].neiRong+"</textarea></td><td  style='width: 200px; text-align: center;'></td><td style='width: 80px; text-align: center;'><a href=''><button type='button' onclick='del("+str[i].id+");' class='btn btn-danger'>删除</button></a></td></tr>");
			}
			});
		 
	 });
	 
		function  del(num) {
			   if(confirm('你确定要删除吗')){
				   $.post("${pageContext.request.contextPath}/delmoban.action",{id:num},function(data){
					 });
			           return true;
			      }else{
			          return false;
			      }
		}
		
		var num1 = "";
		var neirong ="";
		function hq(num,str1){
			num1 = num;
			$("#textarea").val(str1);
			$("#myModal").modal("show");
		
		}
		
		function update(){
			var str =$("#textarea").val();
			 $.post("${pageContext.request.contextPath}/updatemoban.action",{id:num1,neiRong:str},function(data){
				 if (data==1) {	
				 $("#myModal").modal("hide");
				 $("#textarea").val("");
				 window.location.reload();
				 }
			 });
		}
		
		function add(){
			var nr=$("#nr").val();
			$.post("${pageContext.request.contextPath}/addmoban.action",{neiRong:nr},function(data){
				if (data==1) {					
					$("#myModal2").modal("hide");		
					window.location.reload();
				}
			 });
		}
		