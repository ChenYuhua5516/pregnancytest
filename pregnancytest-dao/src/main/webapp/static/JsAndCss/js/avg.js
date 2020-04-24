/**
 * 
 */

function del() {
	$('input[name=isIll][value=0]').attr("checked", true);
	$('input[name=isBornIll][value=0]').attr("checked", true);
	$('input[name=question][value=0]').attr("checked", true);
	$('input[name=useMedicine][value=0]').attr("checked", true);
	$('input[name=vaccinate][value=0]').attr("checked", true);
	$('input[name=contracept][value=0]').attr("checked", true);
	$('input[name=mensesRegular][value=1]').attr("checked", true);
	$('input[name=mensQuanti][value=2]').attr("checked", true);
	$('input[name=dysmenorrhea][value=0]').attr("checked", true);
	$('input[name=breedHistory][value=0]').attr("checked", true);
	$('input[name=badPregnancyResult][value=0]').attr("checked", true);
	$('input[name=isPreDisease][value=0]').attr("checked", true);
	$('input[name=secondHandSmoking][value=0]').attr("checked", true);
	$('input[name="smoking"][value=0]').attr("checked",true);
	
	$('input[name=firstTimeAge]').val("");
	$('input[name="mensPeriod"]').val("");
	$('input[name="mensPeriodMax"]').val("");
	$('input[name="mensCycle"]').val("");
	$('input[name="mensCycleMax"]').val("");
	$('input[name="lastTime"]').val("yyyy-mm-dd");
	$('#isCuttingPalace').val("0");
	
	isDisease();
	checks();
	nvDisease();
	checks4();
	vaccine();
	con();
	hyun();
	bdxys1();
	ck12f();
}
