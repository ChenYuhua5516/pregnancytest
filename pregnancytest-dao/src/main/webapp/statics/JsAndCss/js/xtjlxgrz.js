$(function(){
	$("#syslog").click(function(){
		var ModDate = $(ModDate).val();
		$(".qe").remove();
		 $.post("syslog.action",{ModDate:ModDate},function(data){
		   	   var json = JSON.parse(data);
		   	   var rut = "";
		   	   $.each(json,function(i,item){
		   		   rut += "<tr class='qe'><td>"+item.iD
		   		   +"</td><td>"+item.mname
		   		   +"</td><td>"+item.fname
		   		   +"</td><td>"+item.bianDongTxt
		   		+"</td><td>"+item.aboutTable
		   		+"</td><td>"+item.modDate
		   		+"</td><td>"+item.operator
		   		   +"</td></tr>";
		   	   })
		   	   $("table tr").after(rut);
		      })
	})
})