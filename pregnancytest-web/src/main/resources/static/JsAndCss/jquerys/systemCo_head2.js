	$(document).ready(function(){
            $("#clera").click(function(){
           	 if(confirm("是否清空数据,清空后数据将不会保留！")){
           		 $.ajax({
      					type:"post",
      					url:"updateSysRange.action",
      					data:"",
      					dataType:"text",
      					success:function(data){
      						var datas = eval(data);
      						if(datas){
      							 $(".ly").val("0.0");
      							 $(".ls").val("");
      						}else{
      							alert("清除失败!");
      						}
      					},
      					error:function(){
      					},
      				});
        		}
            })
       });
		
		//新增用户一位id
		function insertUID(){
			if(confirm("您是否要新增一个用户?")){
          		 $.ajax({
     					type:"post",
     					url:"selectUid.action",
     					data:"",
     					dataType:"text",
     					success:function(data){
     						$("#exampleInputName_1").val(data);
     						$("#exampleInputName_2").val("");
     						$("#exampleInputName_3").val("");
     						$("#exampleInputName_4").val("");
     						$("#exampleInputName_7").val("超级管理员");
     						$("#exampleInputName_5").val("");
     					},
     					error:function(){
     					},
     				});
       		}
			};
			//删除管理用户
			function deleteUserUid() {
				//人员编号
				var UID=$("#exampleInputName_1").val();
				if(confirm("您是否删除该用户?")){
				 $.ajax({
					type:"post",
					url:"deleteUserUid.action",
					data:{"UID":UID},
					dataType:"text",
					success:function(data){
						alert(data);
						$("#exampleInputName_1").val("");
 						$("#exampleInputName_2").val("");
 						$("#exampleInputName_3").val("");
 						$("#exampleInputName_4").val("");
 						$("#exampleInputName_7").val("超级管理员");
 						$("#exampleInputName_5").val("");
 						window.location.reload();
					},
					error:function(){
					},
				}); 
				}
			}
			
			//增加用户管理
			function insertUser(){
				
					//人员编号
					var UID=$("#exampleInputName_1").val();
					//用户姓名
					var UName=$("#exampleInputName_2").val();
					//密码
					var UPwd=$("#exampleInputName_3").val();
					//确认密码
					var UPwd2=$("#exampleInputName_4").val();
					//时间
					var CreateDate=$("#exampleInputName_5").val();
					//所属部门
					var K4=$("#exampleInputName_6").val();
					//用户权限
					var UQX=$("#exampleInputName_7").val();
				
					if(UName==""){
						alert("用户名不能为空");
					}else if(UID==""){
						alert("人员编号不能为空");
					}else if(UPwd==""){
						alert("密码不能为空");
					}else if(UPwd!=UPwd2){
						alert("密码输入错误，请重新输入");
					}else if (UPwd.length<8){ 
						alert("密码的长度必须高于8个字符"); 
					}else if(CreateDate==""){
						alert("创建时间不能为空");
					}else{
						if(confirm("您是否保存该用户?")){
			          		 $.ajax({
			     					type:"post",
			     					url:"insertUser.action",
			     					data:{"UID":UID,"UName":UName,"UPwd":UPwd,"CreateDate":CreateDate,"UQX":UQX,"K4":K4},
			     					dataType:"text",
			     					success:function(data){
			      							 alert(data);
			      							$("#exampleInputName_1").val("");
			      	 						$("#exampleInputName_2").val("");
			      	 						$("#exampleInputName_3").val("");
			      	 						$("#exampleInputName_4").val("");
			      	 						$("#exampleInputName_7").val("超级管理员");
			      	 						$("#exampleInputName_5").val("");
			      							window.location.reload();
			     					},
			     					error:function(){
			     					},
			     				});
			       			}
					}
				};
				//只能输入数字和小数点
				function clearNoNum(obj)
				{
				   obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
				   obj.value = obj.value.replace(/^\./g,"");  //验证第一个字符是数字而不是.
				   obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的.
				   obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
				}
				
				
				//短信测试连接
				function opens(){
					$("#tishi").text("连接中");
					$.post("${pageContext.request.contextPath}/lianjie.action",{},function(data){
						if(data == "true"){
							$("#tishi").text("连接成功");
						}else{
							$("#tishi").text("连接失败");
						}
					})
				}
				//短信测试关闭
				function closes(){
					$.post("${pageContext.request.contextPath}/duankai.action",{},function(data){
						$("#tishi").text("");
					})
				}
				//发送短信
			 	var arr = new Array();  
				function fason(){
					var duanxrn = $("#duanxrn").val();
					var sjhm = $("#formGroupInputSmall0").val();
					if(!(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(sjhm))){
						$("#zxc").text("电话号码格式不正确");
					}else{
						$("#zxc").text("");
						$.post("${pageContext.request.contextPath}/fason.action",{duanxrn:duanxrn,sjhm:sjhm},function(data){
							if(data == "true"){
								alert("发送成功");
								
							}else{
								alert("发送失败");
							}
						})
					}
				}