//是否有疾病的方法
			function isDisease(){
				var value= $('input[name="islll"]:checked').val();
				var checkbox= $('input[type=checkbox]:checked').val();
				if(value==1){
					$("input[id=check]").removeAttr("disabled");
					$("input[name=isIllOthersBox]").attr("readonly",false);
				}else if(value==0){
					$("input[id=check]").attr("disabled","disabled");
					$("input[id=check]").attr("checked",false);
					$("input[name=isIllOthersBox]").attr("readonly",true);
					$("input[name=isIllOthersBox]").val("");
				}
				
			}
		    //是否患有出生缺陷
		    function born1(){
		    	var val = $("input[name=isBornIll]:checked").val();
		    	if(val==0){
		    		$("input[name=isBornIllBox]").attr("readonly",true);
		    		$("input[name=isBornIllBox]").val("");
		    	}else{
		    		$("input[name=isBornIllBox]").attr("readonly",false);
		    	}
		    }
		    //是否有男科疾病的方法
		    function manDisease(){
		    	var value= $('input[name="question"]:checked').val();
				if(value==1){
					$("input[id=nanCheck]").removeAttr("disabled");
					$("input[name=questionOthersBox]").attr("readonly",false);
				}else if(value==0){
					$("input[id=nanCheck]").attr("disabled","disabled");
					$("input[id=nanCheck]").attr("checked",false);
					$("input[name=questionOthersBox]").attr("readonly",true);
					$("input[name=questionOthersBox]").val("");
				}
		    }
		    //用药史
		    function useMed(){
		    	var val = $("input[name=useMedicine]:checked").val();
		    	if(val==0){
		    		$("input[name=useMedicineBox]").attr("readonly",true);
		    		$("input[name=useMedicineBox]").val("");
		    	}else{
		    		$("input[name=useMedicineBox]").attr("readonly",false);
		    	}
		    }
		    //是否注射过疫苗
		    function vaccine(){
		    	var value=$('input[name="vaccinate"]:checked').val();
		    	if(value==1){
					$("input[id=vaccinee]").removeAttr("disabled");
					$("input[name=vaccinateOthersBox]").attr("readonly",false);
				}else if(value==0){
					$("input[id=vaccinee]").attr("disabled","disabled");
					$("input[id=vaccinee]").attr("checked",false);
					$("input[name=vaccinateOthersBox]").attr("readonly",true);
					$("input[name=vaccinateOthersBox]").val("");
				}
		    }
		    //祖父母/外祖父母、父母两代家族内近亲结婚
		    function intermarry(){
		    	var val = $("input[name=intermarryF]:checked").val();
		    	if(val==0){
		    		$("input[name=intermarryFBox]").attr("readonly",true);
		    		$("input[name=intermarryFBox]").val("");
		    	}else{
		    		$("input[name=intermarryFBox]").attr("readonly",false);
		    	}
		    }
		    //家族成员患疾病
		    function family(){
		    	var value=$('input[name=diseaseHistoryF]:checked').val();
		    	if(value==1){
					$("input[id=history]").removeAttr("disabled");
					$("input[name=diseaseHistoryFOthersBox]").attr("readonly",false);
					$("input[name=diseaseHistoryFRelationSh]").attr("readonly",false);
				}else if(value==0){
					$("input[id=history]").attr("disabled","disabled");
					$("input[id=history]").attr("checked",false);
					$("input[name=diseaseHistoryFRelationSh]").attr("readonly",true);
					$("input[name=diseaseHistoryFRelationSh]").val("");
					$("input[name=diseaseHistoryFOthersBox]").attr("readonly",true);
					$("input[name=diseaseHistoryFOthersBox]").val("");
				}
		    }
		    //是否吸烟
		    function smokingC(){
		    	var val = $('input[name=smoking]:checked').val();
		    	if(val==0){
		    		$("input[name=smokingBox]").attr("readonly",true);
		    		$("input[name=smokingBox]").val("");
		    	}else{
		    		$("input[name=smokingBox]").attr("readonly",false);
		    	}
		    }
		    //是否存在被动吸烟
		    function secondHandSmok(){
		    	var val = $("input[name=secondHandSmoking]:checked").val();
		    	if(val==1 || val==2){
		    		$("#bdxy10").show();
		    	}else{
		    		$("#bdxy10").hide();
		    		$("#bdxy10").val("");
		    	}
		    }
		    //是否饮酒
		    function drink(){
		    	var val = $("input[name=drinking]:checked").val();
		    	if(val==1 || val==2){
		    		$("#checkDrink").show();
		    	}else{
		    		$("#checkDrink").hide();
		    		$("#checkDrink").val("");
		    	}
		    }
		    //是否使用可卡因等病毒麻药品
		    function ddd(){
		    	var val = $("input[name=drug]:checked").val();
		    	if(val==0){
		    		$("input[name=drugBox]").attr("readonly",true);
		    		$("input[name=drugBox]").val("");
		    	}else{
		    		$("input[name=drugBox]").attr("readonly",false);
		    	}
		    }
		    //生活或工作环境
		    function life(){
		    	var value=$('input[name=poisExpo]:checked').val();
		    	if(value==1){
					$("input[id=work]").removeAttr("disabled");
					$("input[name=poisExpoOthersBox]").attr("readonly",false);
				}else if(value==0){
					$("input[id=work]").attr("disabled","disabled");
					$("input[id=work]").attr("checked",false);
					$("input[name=poisExpoOthersBox]").attr("readonly",true);
					$("input[name=poisExpoOthersBox]").val("");
				}
		    }
		    //增加
		   
		   
		    
		    
		    
		