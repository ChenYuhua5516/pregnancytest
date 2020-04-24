var ID; // 系统编号
var SEX = '男'; // 性别
var fname; // 女性姓名
var mname; // 男性姓名
var Result; // 检查结果
var ResultDes; // 异常情况
var Sickness; // 疾病诊断
var MedicalAdvice; // 医学意见
var PrenubileConsult; // 婚前卫生咨询
var DirectResult; // 咨询指导结果
var ChangeHospital; // 转诊医院
var ChangeHospitalDate; // 转诊日期
var ComeBackDate; // 复诊日期
var ProvideDate; // 出具《婚检证明日期》
var K1; // 主检医生补充病史
var K2; // 进一步检查建议
var K3; // 进一步检查项目
var K4; // 进一步检查的态度 0拒绝
var DotcorName; // 医生姓名
var FillDate;

function del() {
	ID = $("#id").val();
	$.post("resultdel.action", {
		id : ID,
		sex : SEX
	}, function(data) {
		alert(data);
		idBlur();
	})
}

function idBlur() {
	ID = $("#id").val();
	$.post("resultSelect.action", {
		id : ID,
		sex : SEX
	}, function(data) {
		var str = eval("(" + data + ")");
		$("#id").val(str.id);
		if (SEX == '女') {
			$("#name").val(str.fname);
		} else if (SEX == '男') {
			$("#name").val(str.mname);
		}
		if (str.result == 0) {
			$(".radio1:eq(0)").attr("checked", true);
			$("#unusualText").attr("disabled", "true");
			$("#sickText").attr("disabled", "true");
		} else if (str.result == 1) {
			$(".radio1:eq(1)").attr("checked", true);
			$("#unusualText").removeAttr("disabled");
			$("#sickText").removeAttr("disabled");
			$("#unusualText").val(str.resultDes);
			$("#sickText").val(str.sickness);
		}
		if (str.medicalAdvice != '' && str.medicalAdvice != undefined) {
			MedicalAdvice = str.medicalAdvice;
			var list = MedicalAdvice.split(",");
			for (var i = 0; i < list.length; i++) {
				if (list[i] != '') {
					$(".checkbox").eq(list[i]).attr("checked", true);
				}

			}
		}

		$("#PrenubileConsult").val(str.prenubileConsult);
		if (str.directResult == 1) {
			$('input[name="DirectResult"][value="1"]').attr("checked", true);
		} else {
			$('input[name="DirectResult"][value="0"]').attr("checked", true);
		}
		$("#K1").val(str.k1);
		$("#K2").val(str.k2);
		$("#K3").val(str.k3);
		if (str.k1 == 0) {
			$(".K4:eq(0)").attr("checked", true);
		} else if (str.k1 == 1) {
			$(".K4:eq(1)").attr("checked", true);
		}
		$("#ChangeHospital").val(str.changeHospital);
		if (str.changeHospitalDate != undefined) {
			var strchangeHospitalDate = new Date(str.changeHospitalDate);
			var y = 1900 + strchangeHospitalDate.getYear();
			var m = "0" + (strchangeHospitalDate.getMonth() + 1);
			var d = "0" + strchangeHospitalDate.getDate();
			var changeHospitalDate = y + "-"
					+ m.substring(m.length - 2, m.length) + "-"
					+ d.substring(d.length - 2, d.length);
			$("#ChangeHospitalDate").val(changeHospitalDate);
		}
		if (str.comeBackDate != undefined) {
			var strcomeBackDate = new Date(str.comeBackDate);
			var y = 1900 + strcomeBackDate.getYear();
			var m = "0" + (strcomeBackDate.getMonth() + 1);
			var d = "0" + strcomeBackDate.getDate();
			var comeBackDate = y + "-" + m.substring(m.length - 2, m.length)
					+ "-" + d.substring(d.length - 2, d.length);
			$("#ComeBackDate").val(comeBackDate);

		}
		if (str.provideDate != undefined) {
			var strprovideDate = new Date(str.provideDate);
			var y = 1900 + strprovideDate.getYear();
			var m = "0" + (strprovideDate.getMonth() + 1);
			var d = "0" + strprovideDate.getDate();
			var provideDate = y + "-" + m.substring(m.length - 2, m.length)
					+ "-" + d.substring(d.length - 2, d.length);
			$("#ProvideDate").val(provideDate);

		}
		if (str.fillDate != undefined) {
			var date = new Date(str.fillDate);
			var y = 1900 + date.getYear();
			var m = "0" + (date.getMonth() + 1);
			var d = "0" + date.getDate();
			var fillDate = y + "-" + m.substring(m.length - 2, m.length) + "-"
					+ d.substring(d.length - 2, d.length);
			$("#checkdate").val(fillDate);
		}
		if (str.dotcorName != "" || str.dotcorName != undefined) {
			$("#select").append("<option>" + str.dotcorName + "</option>");
		}
	})
}

function check() {
	if ($('input[name="radio1"]:checked').val() == 0) {
		$(".radio1:eq(0)").attr("checked", true);
		$("#unusualText").attr("disabled", "true");
		$("#sickText").attr("disabled", "true");
		$("#unusualText").val("");
		$("#sickText").val("");
	} else if ($('input[name="radio1"]:checked').val() == 1) {
		$(".radio1:eq(1)").attr("checked", true);
		$("#unusualText").removeAttr("disabled");
		$("#sickText").removeAttr("disabled");
	}
}

function save() {
	ID = $("#id").val(); // 系统编号
	if (ID != "") {
		DotcorName = $("#select").val();
		fname = $("#name").val(); // 女性姓名
		Result = $(".radio1:checked").val(); // 检查结果
		ResultDes = $("#unusualText").val();
		Sickness = $("#sickText").val(); // 疾病诊断
		obj = document.getElementsByName('checkbox');

		MedicalAdvice = '';
		for (var i = 0; i < obj.length; i++) {

			if (obj[i].checked) {
				MedicalAdvice += obj[i].value + ',';// 如果选中，将value添加到变量s中
			}
		}

		PrenubileConsult = $("#PrenubileConsult").val(); // 婚前卫生咨询
		DirectResult = $('input[name="DirectResult"]:checked').val();// 咨询指导结果
																		// //咨询指导结果
		var ChangeHospitalDate = new Date();
		var ComeBackDate = new Date();
		var ProvideDate = new Date();
		ChangeHospital = $("#ChangeHospital").val(); // 转诊医院
		ChangeHospitalDate = $("#ChangeHospitalDate").val(); // 转诊日期
		ComeBackDate = $("#ComeBackDate").val(); // 复诊日期
		ProvideDate = $("#ProvideDate").val(); // 出具《婚检证明日期》
		K1 = $("#K1").val(); // 主检医生补充病史
		K2 = $("#K2").val(); // 进一步检查建议
		K3 = $("#K3").val(); // 进一步检查项目
		K4 = $(".K4:checked").val(); // 进一步检查的态度 0拒绝
		var mydate = new Date();
		var endTime = "" + mydate.getFullYear() + "-";
		endTime += (mydate.getMonth() + 1) + "-";
		endTime += mydate.getDate();
		FillDate = $("#checkdate").val();
		if (FillDate == '') {
			FillDate = endTime;
		}
		$.post("resultSave.action", {
			id : ID,
			sex : SEX,
			fname : fname,
			result : Result,
			resultDes : ResultDes,
			sickness : Sickness,
			medicalAdvice : MedicalAdvice,
			prenubileConsult : PrenubileConsult,
			directResult : DirectResult,
			changeHospital : ChangeHospital,
			changeHospitalDate : ChangeHospitalDate,
			comeBackDate : ComeBackDate,
			provideDate : ProvideDate,
			k1 : K1,
			k2 : K2,
			k3 : K3,
			k4 : K4,
			dotcorName : DotcorName,
			FillDate : FillDate
		}, function(data) {
			alert(data);
			idBlur();
		})

	} else {
		alert("请选取用户后进行操作");
	}

}

function clean() {
	$(".cleantext").val("");
	$("textarea").val("");
	$("input[type='checkbox']").attr("checked", false);
	$("input[type='radio']").attr("checked", false);
	$("#K2").val("");
}

$(function() {

	idBlur();

})
