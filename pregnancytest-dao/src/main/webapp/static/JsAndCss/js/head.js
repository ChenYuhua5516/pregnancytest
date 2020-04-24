$( document).ready( function(){
	
	$(".head_portrait").click(function(){
		$(".head_navigation").toggle();
	})
	
	$(".head_navigation").hover(function(){
		$(".head_navigation").css("display","block")	
	},
	function(){
		$(".head_navigation").slideUp(400);
	}
	)


	$(".head_main button").click( function(){
		$(this).css("background-color","deepskyblue")
		$(this).css("color","#F8F8F8")
	})
})
