$(function(){
	 $.post("seleclog.action",{},function(data){
	   	   var json = JSON.parse(data);
	   	   var rut = "";
	   	   $.each(json,function(i,item){
	   		   rut += "<tr><td width='25%''>"+item.logintime
	   		   +"</td><td>"+item.loginmode
	   		   +"</td><td style='width:25%'>"+item.loginuser
	   		   +"</td><td style='width:25%'>"+item.loginpermissions+"</td></tr>";
	   	   })
	   	   $("table tr").after(rut);
	      })
})