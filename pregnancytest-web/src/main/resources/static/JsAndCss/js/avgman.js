/**
 * 
 */
function del() {
	if (confirm("是否重置？")) {
		$('input[name="islll"][value=0]').attr("checked", true);
		isDisease();
		$('input[name="isBornIll"][value=0]').attr("checked", true);
		born1();
		$('input[name="question"][value=0]').attr("checked", true);
		manDisease();
		$('input[name="useMedicine"][value=0]').attr('checked', true);
		useMed();
		$('input[name="vaccinate"][value=0]').attr('checked', true);
		vaccine();
		$('input[name="intermarryF"][value=0]').attr('checked', true);
		intermarry();
		$('input[name="diseaseHistoryF"][value=0]').attr('checked', true);
		family();

		$('input[name="meategg"][value=1]').attr('checked', true);
		$('input[name="hateVeg"][value=0]').attr('checked', true);
		$('input[name="rawMeat"][value=0]').attr('checked', true);
		$('input[name="smoking"][value=0]').attr('checked', true);
		smokingC()
		$('input[name="secondHandSmoking"][value=0]').attr('checked', true);
		secondHandSmok();
		$('input[name="drinking"][value=0]').attr('checked', true);
		drink();
		$('input[name="drug"][value=0]').attr('checked', true);
		ddd();
		$('input[name="poisExpo"][value=0]').attr('checked', true);
		life();
		$('input[name="pressure"][value=0]').attr('checked', true);
		$('input[name="tenseRelationship"][value=0]').attr('checked', true);
		$('input[name="economicPressure"][value=0]').attr('checked', true);
		$('input[name="pregnancyReady"][value=1]').attr('checked', true);
		alert('重置成功');
	}

}