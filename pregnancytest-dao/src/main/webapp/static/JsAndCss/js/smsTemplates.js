$(document).ready(function(){
	$(".td").click(function(){
		var text = $(this).text();
		var textarea = $("#textarea");
		textarea.val(text);
	})
})

