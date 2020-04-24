$(function(){
	$("#checkbox1_X").click(function(){
		var check = document.getElementById("checkbox1_X");
		var oInput=document.getElementsByName("product1");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#checkbox4").click(function(){
		var check = document.getElementById("checkbox4");
		var oInput=document.getElementsByName("checkbox4_1");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#checkbox5").click(function(){
		var check = document.getElementById("checkbox5");
		var oInput=document.getElementsByName("checkbox5_X");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#checkbox6").click(function(){
		var check = document.getElementById("checkbox6");
		var oInput=document.getElementsByName("checkbox6_X");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#checkbox7").click(function(){
		var check = document.getElementById("checkbox7");
		var oInput=document.getElementsByName("checkbox7_X");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#checkbox8").click(function(){
		var check = document.getElementById("checkbox8");
		var oInput=document.getElementsByName("checkbox8_X");
		for (var i=0;i<oInput.length;i++){
			oInput[i].checked=check.checked;
		}
	});
	
	$("#myButton1").click(function(){
		var oInput = document.getElementsByClassName("checkbox_btnClik");
		for (var i=0;i<oInput.length;i++){
			if(oInput[i].checked==false){
				oInput[i].click();
			}
		}
	});
	$(".close_back_E").click(function(){
		alert(1);
		window.history.back();
	});
	$(document).keydown(function (event){
		if(event.keyCode == "27" || event.keyCode == "69"){
			window.history.back();
		}
	});
});
