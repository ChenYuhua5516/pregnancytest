		$(document).ready(function(){
			/** 
			* 鼠标移到的颜色 
			*/ 
			$(".modal-body table tr #a1").hover(function(){ 
				$("#a1").css("background-color","#306AC5");
			}); 
			$(".modal-body table tr #a2").mouseover(function(){ 
				$("#a2").css("background-color","#306AC5");
				
			}); 
			$(".modal-body table tr #a3").mouseover(function(){ 
				$("#a3").css("background-color","#306AC5");
				
			}); 
			/** 
			* 鼠标移出的颜色 
			*/
			$(".modal-body table tr").mouseout(function(){ 
				$("#a1").css("background-color","white");
				$("#a2").css("background-color","white");
				$("#a3").css("background-color","white");
			});
		});
		