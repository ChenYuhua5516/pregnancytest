window.onload = function(){
	 var is = 0;
	 var count = 0;
	 var checka = document.getElementsByClassName("checkbox");
	 var show = document.getElementsByClassName("show");
	 var che = $(".layui-form-checkbox");
	 for(var i= 0;i<checka.length;i++){
		 if(checka[i].checked){
			 ++count;
		 }
	 }
	 
	 for(var i= 0;i<show.length;i++){
		 if(show[i].checked){
			 ++is;
		 }
		 if(checka.length.checked){
			 $("#qita2").removeAttr("disabled");
		 }
	 }
	 
	 
	 
	 if(count==3){
			for(var i = 0;i<checka.length;i++){
			if(!checka[i].checked){
				checka[i].setAttribute("disabled",true);
			}
			}
	 }
	 
	 if(is==0){
		 document.getElementById("disabled").style.cssText="display:none;"
	 }
	 
				layui.use('form',function(){
				 var form = layui.form;
					form.on('checkbox(qita)', function(data){
						if(data.elem.checked==true){
							$("#qita2").removeAttr("disabled")
						}else{
							$("#qita2").attr("disabled","disabled")
					}
				})
				form.on('checkbox',function(data){
				var check = data.elem;
				if(check.checked==true){
					if(count<3){
						++count;
					}
					if(count==3){
						for(var i = 0;i<checka.length;i++){
						if(!checka[i].checked){
							checka[i].setAttribute("disabled",true);
						}
						}
					}
				}else{
					count--;
					if(count<3){
					for(var i = 0;i<checka.length;i++){
						if(!checka[i].checked){
							checka[i].removeAttribute("disabled");
						}
					}
					for(var i = 0;i<che.length;i++){
						che[i].removeClass("layui-form-checked");
					}
					}
				}
				
				
				form.on('checkbox(show)',function(data){
					var check = data.elem;
					if(check.checked==true){
						++is;
						document.getElementById("disabled").style.cssText="display: block;"
					}else{
						is--;
						if(is==0){
							document.getElementById("disabled").style.cssText="display:none;"
						}
					}
			})
			})
		})
	
	
	layui.use(['form', 'layedit', 'laydate'], function(){
		  var form = layui.form
		  ,layer = layui.layer
		  ,layedit = layui.layedit
		  ,laydate = layui.laydate;
		  
		  //日期
		 laydate.render({
            elem: '#date'
            , theme: 'molv'
            , value: new Date()
        });
         laydate.render({
            elem: '#date2'
            , theme: 'molv'
            , value: new Date()
        });
      
		 });
}
