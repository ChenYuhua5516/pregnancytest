var ID;
var SEX = '女';
var XrayID;
var XrayShow;
var IsNormal;
var UnusualDes;
var Doctor;
var ExaminationDate;
var fname;
function idBlur() {
	ID = $("#id").val();
	$.post("xianSelect.action", {
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

		$("#xid").val(str.xrayID);

		$("#xtext").val(str.xrayShow);
		if (str.isNormal == 0) {
			$('input[name="checktext"][value=0]').attr("checked", true);
			$("#endtext").val("");
		} else if (str.isNormal == 1) {
			$('input[name="checktext"][value=1]').attr("checked", true);
			$("#endtext").val(str.unusualDes);
		} else {
			$('input[name="checktext"][value=2]').attr("checked", true);
			$("#endtext").val(str.unusualDes);
		}
		check();
		if (str.doctor != "" || str.doctor != undefined) {
			$("#select").append("<option>" + str.doctor + "</option>");
		}
		if (str.examinationDate != undefined) {
			var date = new Date(str.examinationDate);
			var y = 1900 + date.getYear();
			var m = "0" + (date.getMonth() + 1);
			var d = "0" + date.getDate();
			var strexaminationDate = y + "-"
					+ m.substring(m.length - 2, m.length) + "-"
					+ d.substring(d.length - 2, d.length);
			$("#checkdate").val(strexaminationDate);
		}

	})

}

function check() {
	if ($('input[name="checktext"]:checked').val() == 2) {
		$("#endtext").removeAttr("disabled");
	} else if ($('input[name="checktext"]:checked').val() == 0
			|| $('input[name="checktext"]:checked').val() == 1) {
		$("#endtext").val("");
		$("#endtext").attr("disabled", "true");
	}

}

function save() {
	var ID = $("#id").val();
	if (ID != "") {
		var XrayID = $("#xid").val();
		var XrayShow = $("#xtext").val();
		IsNormal = $('input[name="checktext"]:checked').val();
		var UnusualDes = $("#endtext").val();
		var Doctor = $("#select").val();
		var ExaminationDate = $("#checkdate").val();
		var fname = $("#name").val();
		var mydate = new Date();
		var endTime = "" + mydate.getFullYear() + "-";
		endTime += (mydate.getMonth() + 1) + "-";
		endTime += mydate.getDate();
		if (ExaminationDate == '') {
			ExaminationDate = endTime;
		}
		$.post("xianSave.action", {
			id : ID,
			fname : fname,
			sex : SEX,
			xrayID : XrayID,
			xrayShow : XrayShow,
			unusualDes : UnusualDes,
			doctor : Doctor,
			examinationDate : ExaminationDate,
			isNormal : IsNormal
		}, function(data) {
			alert(data);
			idBlur();
		})

	} else {
		alert("请选取用户后进行操作");
	}

}

$(function() {

	idBlur();
})