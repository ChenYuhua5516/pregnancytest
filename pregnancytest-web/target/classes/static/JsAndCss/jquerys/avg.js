

	function isDisease() {
		var va = $("#fou").val();
		if (va == 0) {
			$("input[class=yi]").attr("disabled", "disabled");
			$("input[class=yi]").attr("checked", false);
			$("#qt1").val("");
			$("#qt1").attr("readonly", true);
		}
	}
	function isDiseases() {
		var va = $("#shi").val();
		if (va == 1) {
			$("input[class=yi]").removeAttr("disabled");
			$("#ck1").removeAttr("disabled");
		}
	}
	function check() {
		if ($("#ck1").prop("checked")) {
			$("#qt1").attr("readonly", false);
		} else {
			$("#qt1").attr("readonly", true);
			$("#qt1").val("");
		}
	}

	function nvDisease() {
		var va = $("#questionid").val();
		if (va == 0) {
			$("input[class=yy]").attr("disabled", "disabled");
			$("input[class=yy]").attr("checked", false);
			$("#qt3").val("");
			$("#qt3").attr("readonly", true);
		}
	}
	function nvDiseases() {
		var va = $("#questionids").val();
		if (va == 1) {
			$("input[class=yy]").removeAttr("disabled");
			$("#ck3").removeAttr("disabled");
		}
	}
	function checks() {
		if ($("#ck2").prop("checked")) {
			$("#qt2").attr("readonly", false);
		} else {
			$("#qt2").attr("readonly", true);
		}
	}
	function checks2() {
		$("#qt2").attr("readonly", true);
		$("#qt2").attr("checked", false);
		$("#qt2").val("");
	}
	function check4() {
		if ($("#ck4").prop("checked")) {
			$("#qt4").attr("readonly", false);
		} else {
			$("#qt4").attr("readonly", true);
		}
	}
	function checks4() {
		$("#qt4").attr("readonly", true);
		$("#qt4").attr("checked", false);
		$("#qt4").val("");
	}
	function check3() {
		if ($("#ck3").prop("checked")) {
			$("#qt3").attr("readonly", false);
		} else {
			$("#qt3").attr("readonly", true);
		}
	}
	function vaccine() {
		var va = $("#vaccinate").val();
		if (va == 0) {
			$("input[class=yt]").attr("disabled", "disabled");
			$("input[class=yt]").attr("checked", false);
			$("#qt5").val("");
			$("#qt5").attr("readonly", true);
		}
	}
	function vaccines() {
		var va = $("#vaccinates").val();
		if (va == 1) {
			$("input[class=yt]").removeAttr("disabled");
			$("#ck5").removeAttr("disabled");
		}
	}
	function check5() {
		if ($("#ck5").prop("checked")) {
			$("#qt5").attr("readonly", false);
		} else {
			$("#qt5").attr("readonly", true);
		}
	}
	function con() {
		var va = $("#contracept").val();
		if (va == 0) {
			$("input[class=gn]").attr("disabled", "disabled");
			$("input[class=gn]").attr("checked", false);
			$("#qt6").val("");
			$("#qt6").attr("readonly", true);
			$("#gn").val("");
			$("#gn").attr("readonly", true);
			$("#contraceptStopTime").hide();
		}
	}
	function cons() {
		var va = $("#contracepts").val();
		if (va == 1) {
			$("input[class=gn]").removeAttr("disabled");
			$("#gn").removeAttr("disabled");
		}
	}
	function check6() {
		if ($("#ck6").prop("checked")) {
			$("#qt6").attr("readonly", false);
		} else {
			$("#qt6").attr("readonly", true);
		}
	}
	function checkc() {
		if ($("#contraceptStop").prop("checked")) {
			$("#contraceptStopTime").show();
		} else {
			$("#contraceptStopTime").hide();

		}
	}
	function hyuns() {
		if ($("#breedHistory").prop("checked")) {
			$("#hy").removeAttr("disabled");
			$("#hc").removeAttr("disabled");
			$("#zy").removeAttr("disabled");
			$("#zc").removeAttr("disabled");
			$("#hy").removeAttr("readonly");
			$("#hc").removeAttr("readonly");
			$("#zy").removeAttr("readonly");
			$("#zc").removeAttr("readonly");
			$(".badPregnancyResult").removeAttr("disabled");
			$(".gestation").removeAttr("disabled");
			$("#isCuttingPalace").removeAttr("disabled");
			$("#zn").removeAttr("disabled");
			$(".sdChild").removeAttr("disabled");
		}

	}
	function hyun() {
		if ($("#breedHistorys").prop("checked")) {
			$("#hy").val("");
			$("#hc").val("");
			$("#zy").val("");
			$("#zc").val("");
			$("#isCuttingPalace").val("");
			$("#cuttingPalaceDateTime").val("");
			$("#hy").attr("readonly", true);
			$("#hc").attr("readonly", true);
			$("#zy").attr("readonly", true);
			$("#zc").attr("readonly", true);
			$("#isCuttingPalace").attr("readonly", true);
			$("#cuttingPalaceDateTime").attr("readonly", true);
			$(".badPregnancyResult").attr("disabled", true);
			$(".gestation").attr("disabled", true);
			$(".sdChild").attr("disabled", true);
			$("#zn").attr("disabled", true);
			$("#isCuttingPalace").attr("disabled", true);
			$("input[name=deadBirthNum]").attr("disabled", true);
			$("input[name=aborNum]").attr("disabled", true);
			$("input[name=induAborNum]").attr("disabled", true);
			$("#qt7").attr("disabled", true);
			$("#deadBirths").attr("disabled", true);
			$("#abor").attr("disabled", true);
			$("#induAbor").attr("disabled", true);
			$("#ck7").attr("disabled", true);
		}
	}
	function stscs() {
		$("#deadBirths").removeAttr("disabled");
		$("#abor").removeAttr("disabled");
		$("#induAbor").removeAttr("disabled");
		$("#ck7").removeAttr("disabled");
	}
	function stsc() {
		$("input[name=deadBirthNum]").val("");
		$("input[name=aborNum]").val("");
		$("input[name=induAborNum]").val("");
		$("#qt7").val("");
		$("#deadBirths").attr("disabled", true);
		$("#abor").attr("disabled", true);
		$("#induAbor").attr("disabled", true);
		$("#ck7").attr("disabled", true);
		$("#abor").attr("checked", false);
		$("#deadBirths").attr("checked", false);
		$("#induAbor").attr("checked", false);
		$("#ck7").attr("checked", false);
		$("input[name=deadBirthNum]").hide();
		$("input[name=aborNum]").hide();
		$("input[name=induAborNum]").hide();
		$("#qt7").hide();
	}
	function checkd() {
		if ($("#deadBirths").prop("checked")) {
			$("input[name=deadBirthNum]").show();
			$("input[name=deadBirthNum]").attr("readonly", false);
		} else {
			$("input[name=deadBirthNum]").hide();

		}
	}
	function checka() {
		if ($("#abor").prop("checked")) {
			$("input[name=aborNum]").show();
			$("input[name=aborNum]").attr("readonly", false);
		} else {
			$("input[name=aborNum]").hide();

		}
	}
	function checki() {
		if ($("#induAbor").prop("checked")) {
			$("input[name=induAborNum]").show();
			$("input[name=induAborNum]").attr("readonly", false);
		} else {
			$("input[name=induAborNum]").hide();

		}
	}
	function checkck7() {
		if ($("#ck7").prop("checked")) {
			$("#qt7").show();
			$("#qt7").attr("readonly", false);
		} else {
			$("#qt7").hide();

		}
	}
	function familys() {
		$(".gq").removeAttr("disabled");
	}
	function family() {
		$(".gq").attr("checked", false);
		$("#qt50").val("");
		$(".gq").attr("disabled", true);
		$("#qt50").attr("readonly", true);
	}
	function tt() {
		if ($("#ck50").prop("checked")) {
			$("#qt50").removeAttr("disabled");
		} else {
			$("#qt50").attr("disabled", true);

		}
	}
	function isCuttingPalaces() {
		var a = $("#isCuttingPalace").val();
		if (a == 1) {
			$("#cuttingPalaceDateTime").removeAttr("disabled");
		} else if (a == 0) {
			$("#cuttingPalaceDateTime").attr("disabled", true);
		}

	}
	function binzs() {
		$("#bz").removeAttr("disabled");
		$("#bzh").removeAttr("disabled");
	}
	function binz() {
		$("#sdChildf").attr("checked", true);
		$("#bz").val("");
		$("#bzh").val("");
		$("#bz").attr("disabled", true);
		$("#bzh").attr("disabled", true);
	}
	function c() {
		var text = document.getElementById("zn").value
		var texts = document.getElementById("qt8").value
		if (text != "" && texts == "") {
			alert("文本框有值" + text);
			$("#childIlls").removeAttr("disabled");
			$("#childIlls").attr("checked", true);
			$("#ck8").removeAttr("disabled");
			$("#qt8").val("");
			$("#qt8").attr("display", true);
			$("#ck8").attr("checked", false);
		} else if (text == "") {
			alert("文本框无值" + texts);
			$("#childIlls").attr("checked", false);
			$("#childIlls").attr("disabled", true);
			$("#ck8").attr("disabled", true);
			$("#ck8").attr("checked", false);
			$("#qt8").attr("disabled", true);
			$("#qt8").val("");
		} else if (text != "" && texts != "") {
			alert("文本框有值,隐藏有值" + text);
			alert("文本框有值,隐藏有值" + texts);
			$("#childIlls").removeAttr("disabled");
			$("#ck8").attr("checked", true);
			$("#ck8").removeAttr("disabled");
			$("#qt8").removeAttr("disabled");
			$("#qt8").removeAttr("readonly");
		}
	}
	function t() {
		if ($("#ck8").prop("checked")) {
			$("#qt8").removeAttr("disabled");
			$("#qt8").removeAttr("readonly");
		}
	}
	function ts() {
		if ($("#childIlls").prop("checked")) {
			$("#qt8").val("");
			$("#qt8").attr("display", true);
			$("#qt8").attr("readonly", true);
		}
	}
	function ck9s() {
		if ($("#ck9").prop("checked")) {
			$("#qt9").removeAttr("readonly");
		}
	}
	function ck9f() {
		if ($("#intermarrys").prop("checked")) {
			$("#qt9").attr("readonly", true);
			$("#qt9").val("");
		}

	}
	function ck10s() {
		if ($("#ck10").prop("checked")) {
			$("#qt10").removeAttr("readonly");
		}
	}
	function ck10f() {
		if ($("#intermarryFs").prop("checked")) {
			$("#qt10").attr("readonly", true);
			$("#qt10").val("");
		}

	}
	function diseaseHistorys() {
		$("#diseaseHistoryFRelationShs").removeAttr("readonly");
		$(".dzh").removeAttr("disabled");
	}
	function ck20s() {
		if ($("#ck20").prop("checked")) {
			$("#qt20").removeAttr("readonly");
		} else {
			$("#qt20").attr("readonly", true);
			$("#qt20").val("");
		}
	}
	function diseaseHistory() {
		$(".dzh").attr("disabled", true);
		$("#diseaseHistoryFRelationShs").attr("readonly", true);
		$(".dzh").attr("checked", false);
		$("#diseaseHistoryFRelationShs").val("");
		$("#qt20").val("");
		$("#qt20").attr("readonly", true);
	}
	function ck12s() {
		$("#qt12").removeAttr("readonly");
	}
	function ck12f() {
		$("#qt12").attr("readonly", true);
		$("#qt12").val("");
	}
	function bdxys1() {
		$("#bdxy10").val("");
		$("#bdxy10").attr("readonly", true);
		$("#bdxy10").hide();
	}
	function bdxys2() {
		$("#bdxy10").removeAttr("readonly");
		$("#bdxy10").show();
	}
	function bdxys3() {
		$("#bdxy10").removeAttr("readonly");
		$("#bdxy10").show();
	}
	function drinking1() {
		$("#drinking4").val("");
		$("#drinking4").attr("readonly", true);
		$("#drinking4").hide();
	}
	function drinking2() {
		$("#drinking4").removeAttr("readonly");
		$("#drinking4").show();
	}
	function drinking3() {
		$("#drinking4").removeAttr("readonly");
		$("#drinking4").show();
	}
	function drugs() {
		$("#qt13").removeAttr("readonly");
	}
	function drugf() {
		$("#qt13").val("");
		$("#qt13").attr("readonly", true);
	}
	function fsxians() {
		$(".fsx").removeAttr("disabled");
	}
	function fsxian() {
		$(".fsx").attr("disabled", true);
		$("#qt16").val("");
		$("#qt16").attr("readonly", true);
		$(".fsx").attr("checked", false);
	}
	function qt16s() {
		if ($("#ck16").prop("checked")) {
			$("#qt16").removeAttr("readonly");
		} else {
			$("#qt16").attr("readonly", true);
			$("#qt16").val("");
		}
	}
	
	