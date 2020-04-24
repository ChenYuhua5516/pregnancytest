var sex="男";
var temp="0";
	$(function(){
			$.post("beforeselect.action",
					{sex:sex},
					function(data){
						var str=JSON.parse(data);
						if(str.intermarryF==1){
							$("#intermarry").text("有");
						}else{
							$("#intermarry").text("无");
						}
						var img = "data:image/jpeg;base64,"+str.MImage;
						$("#ID").val(str.ID);
						$("#fname").val(str.fname);
						$("#mname").val(str.mname);
						$("#sex").val(sex);
						$("#headimg").attr("src",img);
						if(str.Result==1){
							redis();
							$("#yic").val(str.ResultDes);
							$('input[name="isIll"]:eq(1)').attr("checked",true);
						}else if(str.Result==0){
							dis();
							$('input[name="isIll"]:eq(0)').attr("checked",true);
						}
						if(str.MedicalAdvice!=''){
						var MedicalAdvice=str.MedicalAdvice;
			     		var list=MedicalAdvice.split(",");
		     			for (var i = 0; i < list.length; i++) {
		     				if(list[i]!=''){
		     					$(".lastcheck").eq(list[i]).attr("checked",true);
		     				}
		     				
						}
						}
					})
			
	})

	
	function save(){
		var ID=$("#ID").val();
		if(ID!=""){
			$.post("beforecount.action",
					{sex:sex},
					function(data){
						var str=JSON.parse(data);
						temp = str;
						if(temp==1){
							var ID=$("#ID").val();
							var Result;
							var ResultDes;
							var MedicalAdvice;
							if($('input[name="isIll"]:checked').val()==1){
								Result=0;
						 	 }else{
						 		Result=1;
						 		ResultDes=$("#yic").val();
						 	 }
							
							 obj=document.getElementsByName('lastcheck');
						    	
					    	 MedicalAdvice='';    
							  for(var i=0; i<obj.length; i++){   
								  
							    if(obj[i].checked) {
							    	MedicalAdvice+=obj[i].value+',';//如果选中，将value添加到变量s中  
							    }
							  }	
								  $.post("beforeupdate.action",
											{ID:ID,sex:sex,Result:Result,ResultDes:ResultDes,MedicalAdvice:MedicalAdvice},
											function(data){
												alert(data);
											}) 
							 
								}else{
									alert("检查未完成不能进行操作");
								}
					})
		}else{
   		 alert("请选取用户后进行操作");
		}
		
	
	}
	
	
	
	function checkradio(){
		 if($('input[name="isIll"]:checked').val()==1){
 			$("#yic").val("");
			$("#yic").attr("disabled","true");
	 	 }else{
				$("#yic").removeAttr("disabled");
	 	 }
		
	}
	
	
	
	function dis(){
		$("#yic").attr("disabled","true");
	}
	function redis(){
		$("#yic").removeAttr("disabled");
	}
	
	function clean(){
		$("textarea").val("");
		$("input[type='checkbox']").attr("checked",false);
		$("input[type='radio']").attr("checked",false);
	}