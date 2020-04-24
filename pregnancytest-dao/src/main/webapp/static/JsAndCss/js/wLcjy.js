layui.use('laydate',function(){
	var laydate=layui.laydate,
		$ = layui.$;
	
	$(function(){
		$.post("getsession.action",{},function(data){
			 var json = JSON.parse(data);
        	   $.each(json,function(i,items){
        		   $("#ID").val(items.iD);
        		   $("#fname").val(items.fname);
        		   $("#fbirthDate").val(items.fbirthDate);
        	   })
           })
		
		
		
		$.post("selectall.action",{},function(data){
			var json = JSON.parse(data);
			$.each(json,function(i,items){
				 	$("#leuClueCell1").val(items.leuClueCell1);
        		   	$("#leuTrichomonas1").val(items.leuTrichomonas1);
        		   	$("#leuAmineOdor1").val(items.leuAmineOdor1);	
        		   	$("#candidiasis").val(items.candidiasis);
        		   	$("#leuCleanliness1").val(items.leuCleanliness1);
        		   	$("#wphValue").val(items.wphValue);		
        		   	$("#gonorrhoeae1").val(items.gonorrhoeae1);
        		   	$("#chlamydiaT1").val(items.chlamydiaT1);
        		   	$("#whb").val(items.whb);		
        		   	$("#wrbC").val(items.wrbC);
        		   	$("#we").val(items.we);
        		   	$("#wpbT").val(items.wpbT);		
        		   	$("#wb").val(items.wb);
        		   	$("#wl").val(items.wl);
        		   	$("#wwbC").val(items.wwbC);		
        		   	$("#wm").val(items.wm);
        		   	$("#wn").val(items.wn);
        		   	$("#midcell").val(items.midcell);		
        		   	$("#urineRoutine1").val(items.urineRoutine1);
        		   	$("#unformalurt").val(items.unformalurt);
        		   	$("#abO1").val(items.abO1);		
        		   	$("#rh1").val(items.rh1);
        		   	$("#wbloodSugar").val(items.wbloodSugar);
        		   	$("#hbs_Ag").val(items.hbs_Ag);		
        		   	$("#hbs_Ab").val(items.hbs_Ab);
        		   	$("#hbe_Ag").val(items.hbe_Ag);
        		   	$("#hbe_Ab").val(items.hbe_Ab);		
        		   	$("#hbc_Ab").val(items.hbc_Ab);
        		   	$("#walT").val(items.walT);
        		   	$("#wcr").val(items.wcr);		
        		   	$("#wtsH").val(items.wtsH);
        		   	$("#rvigg1").val(items.rvigg1);
        		   	$("#treponema").val(items.treponema);
        		   	$("#cvigg1").val(items.cvigg1);
        		   	$("#cvigm1").val(items.cvigm1);
        		   	$("#tgigg1").val(items.tgigg1);		
        		   	$("#tgigm1").val(items.tgigm1);
        		   	$("#elseItem").val(items.elseItem);
        		   	$("#testerName").val(items.testerName);
        		   	//$("date").val(fmtDate(items.wcheckDate));
        		   //alert(fmtDate(items.wcheckDate));
        		   	laydate.render({
        		   		elem: '#date',//指定元素	
        		   		value:fmtDate(items.wcheckDate)
        		   	});
				})
			
		})
		
		
		  $("#nvadd").click(function(){
			  	var ID = $("#ID").val();
				//白带检查
				var leuClueCell1=$("#leuClueCell1").val(); 
				var candidiasis=$("#candidiasis").val(); 
				var leuTrichomonas1=$("#leuTrichomonas1").val(); 
				var leuCleanliness1=$("#leuCleanliness1").val(); 
				var leuAmineOdor1=$("#leuAmineOdor1").val(); 
				var wphValue=$("#wphValue").val(); 
				var gonorrhoeae1=$("#gonorrhoeae1").val(); 
				var chlamydiaT1=$("#chlamydiaT1").val(); 
				//血细胞分析
				var whb=$("#whb").val(); 
				var wrbC=$("#wrbC").val(); 
				var we=$("#we").val(); 
				var wpbT=$("#wpbT").val(); 
				var wb=$("#wb").val(); 
				var wl=$("#wl").val(); 
				var wwbC=$("#wwbC").val(); 
				var wm=$("#wm").val(); 
				var wn=$("#wn").val(); 
				var midcell=$("#midcell").val(); 
				//尿液常规检查
				var unformalurt=$("#unformalurt").val(); 
				var urineRoutine1=$("#urineRoutine1").val(); 
				//血型
				var abO1=$("#abO1").val(); 
				var rh1=$("#rh1").val(); 
				//血糖
				var wbloodSugar=$("#wbloodSugar").val(); 
				//乙肝血清
				var hbs_Ag=$("#hbs_Ag").val(); 
				var hbs_Ab=$("#hbs_Ab").val(); 
				var hbe_Ag=$("#hbe_Ag").val(); 
				var hbe_Ab=$("#hbe_Ab").val(); 
				var hbc_Ab=$("#hbc_Ab").val(); 
				//肝肾功能
				var walT=$("#walT").val(); 
				var wcr=$("#wcr").val(); 
				//甲状腺
				var wtsH=$("#wtsH").val(); 
				//病毒筛查
				var rvigg1=$("#rvigg1").val(); 
				var treponema=$("#treponema").val(); 
				var cvigg1=$("#cvigg1").val(); 
				var cvigm1=$("#cvigm1").val(); 
				var tgigg1=$("#tgigg1").val(); 
				var tgigm1=$("#tgigm1").val(); 
				//其他
				var elseItem=$("#elseItem").val(); 
				//医师签名
				var testerName=$("#name").val(); 
				//询问日期
				var wcheckDate=$("#date").val(); 
				if(wcheckDate == null || wcheckDate == ""){
					alert("请保存时间");
				}else{
					 $.post("nvpanduan.action",{},function(data){
						 var json = JSON.parse(data);
							if (json == 0) {
								 $.post("nvadd.action",{ID:ID,
									  leuClueCell1:leuClueCell1,candidiasis:candidiasis,leuTrichomonas1:leuTrichomonas1,
									   leuCleanliness1:leuCleanliness1,leuAmineOdor1:leuAmineOdor1,wphValue:wphValue,
									   gonorrhoeae1:gonorrhoeae1,chlamydiaT1:chlamydiaT1,whb:whb,wrbC:wrbC,we:we,wpbT:wpbT,wb:wb,wl:wl,wwbC:wwbC,wm:wm,wn:wn,midcell:midcell,
									   unformalurt:unformalurt,	urineRoutine1:urineRoutine1,abO1:abO1,rh1:rh1,wbloodSugar:wbloodSugar,hbs_Ag:hbs_Ag,hbs_Ab:hbs_Ab,hbe_Ag:hbe_Ag,hbe_Ab:hbe_Ab,hbc_Ab:hbc_Ab,walT:walT,
									   wcr:wcr,wtsH:wtsH,rvigg1:rvigg1,treponema:treponema,cvigg1:cvigg1,cvigm1:cvigm1,tgigg1:tgigg1,tgigm1:tgigm1,elseItem:elseItem,testerName:testerName,wcheckDate:wcheckDate
						           },function(data){
						        	  alert("保存成功！^_^");
						           })
							} else {
								$.post("nvupdata.action",{ID:ID,
									  leuClueCell1:leuClueCell1,candidiasis:candidiasis,leuTrichomonas1:leuTrichomonas1,
									   leuCleanliness1:leuCleanliness1,leuAmineOdor1:leuAmineOdor1,wphValue:wphValue,
									   gonorrhoeae1:gonorrhoeae1,chlamydiaT1:chlamydiaT1,whb:whb,wrbC:wrbC,we:we,wpbT:wpbT,wb:wb,wl:wl,wwbC:wwbC,wm:wm,wn:wn,midcell:midcell,
									   unformalurt:unformalurt,	urineRoutine1:urineRoutine1,abO1:abO1,rh1:rh1,wbloodSugar:wbloodSugar,hbs_Ag:hbs_Ag,hbs_Ab:hbs_Ab,hbe_Ag:hbe_Ag,hbe_Ab:hbe_Ab,hbc_Ab:hbc_Ab,walT:walT,
									   wcr:wcr,wtsH:wtsH,rvigg1:rvigg1,treponema:treponema,cvigg1:cvigg1,cvigm1:cvigm1,tgigg1:tgigg1,tgigm1:tgigm1,elseItem:elseItem,testerName:testerName,wcheckDate:wcheckDate
						           },function(data){
						        	  alert("保存成功！^_^");
						           })
							}
						 
			           })
				}
			});
			
			
			function fmtDate(obj){
			    var date =  new Date(obj);
			    var y = 1900+date.getYear();
			    var m = "0"+(date.getMonth()+1);
			    var d = "0"+date.getDate();
			    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
			}
	}) 	
	
	
	
})


