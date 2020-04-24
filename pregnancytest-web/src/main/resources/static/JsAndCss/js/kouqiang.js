var ID;
var SEX = '女';
var CheckDev;
var CheckShow;
var IsNormal;
var UnusualDes;
var Doctor;
var ExaminationDate;
var fname;
function idBlur() {
	ID = $("#id").val();
	$.post("mouthSelect.action", {
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
		$("#shebei").val(str.checkDev);
		$("#checkShow").val(str.checkShow);
		if (str.isNormal == 0) {
			$('input[name="checktext"][value=0]').attr("checked", true);
			$("#endtext").val("");
		} else {
			$('input[name="checktext"][value=1]').attr("checked", true);
			$("#endtext").val(str.unusualDes);
		}
		check();
		if (str.doctor != "" && str.doctor != undefined) {
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
	if ($('input[name="checktext"]:checked').val() == 1) {
		$("#endtext").removeAttr("disabled");
	} else {
		$("#endtext").val("");
		$("#endtext").attr("disabled", "true");

	}

}

function save() {
	ID = $("#id").val();
	if (ID != "") {
		fname = $("#name").val();
		CheckDev = $("#shebei").val();
		CheckShow = $("#checkShow").val();
		IsNormal = $('input[name="checktext"]:checked').val();
		UnusualDes = $("#endtext").val();
		Doctor = $("#select").val();
		ExaminationDate = $("#checkdate").val();
		var mydate = new Date();
		var endTime = "" + mydate.getFullYear() + "-";
		endTime += (mydate.getMonth() + 1) + "-";
		endTime += mydate.getDate();
		if (ExaminationDate == '') {
			ExaminationDate = endTime;
		}

		$.post("mouthSave.action", {
			id : ID,
			fname : fname,
			sex : SEX,
			checkDev : CheckDev,
			checkShow : CheckShow,
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
