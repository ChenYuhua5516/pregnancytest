$(document).ready(function(){
	$("li").click(function(){
		var li = $(this).text();
		var textarea = $("textarea");
		textarea.val(li);
	})
})