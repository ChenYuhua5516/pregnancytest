$(function(){
			
			
			$.post("nangetsession.action",{},function(data){
				 var json = JSON.parse(data);
	        	   $.each(json,function(i,items){
	        		   $("#ID").val(items.iD);
	        		   $("#mname").val(items.mname);
	        		   $("#mbirthDate").val(items.mbirthDate);
	        	   })
	           })
			
			
	           
	           
	           $.post("nanselectall.action",{},function(data){
				var json = JSON.parse(data);
				$.each(json,function(i,items){
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
	        		   	$("#urt").val(items.urt);
	        		   	$("#unformalurt").val(items.unformalurt);
	        		   	$("#abo").val(items.abo);		
	        		   	$("#rh").val(items.rh);
	        		   	$("#hbsag").val(items.hbsag);		
	        		   	$("#hbsab").val(items.hbsab);
	        		   	$("#hbeag").val(items.hbeag);
	        		   	$("#hbeab").val(items.hbeab);		
	        		   	$("#hbcab").val(items.hbcab);
	        		   	$("#alt").val(items.alt);
	        		   	$("#cr").val(items.cr);		
	        		   	$("#wtsH").val(items.wtsH);
	        		   	$("#treponema").val(items.treponema);
	        		   	$("#elseItem").val(items.elseItem);
	        		   
					})
			})
	           
			
			$("#update").click(function(){
					  	var ID = $("#id")
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
						var urt=$("#urt").val(); 
						//血型
						var abo=$("#abo").val(); 
						var rh=$("#rh").val(); 
						//乙肝血清
						var hbsag=$("#hbsag").val(); 
						var hbsab=$("#hbsab").val(); 
						var hbeag=$("#hbeag").val(); 
						var hbeab=$("#hbeab").val(); 
						var hbcab=$("#hbcab").val(); 
						//肝肾功能
						var alt=$("#alt").val(); 
						var cr=$("#cr").val(); 
						//甲状腺
						var wtsH=$("#wtsH").val(); 
						//病毒筛查
						var treponema=$("#treponema").val(); 
						//其他
						var elseItem=$("#elseItem").val(); 
						//医师签名
						var doctorName=$("#doctorName").val(); 
						//询问日期
						var checkTime=$("#checkTime").val(); 
						if(checkTime == null || checkTime == ""){
							alert("请保存时间");
						}else{
							$.post("panduan.action",{ID:id},function(data){
								var json = JSON.parse(data);
								if (json == 0) {
									 $.post("nanadd.action",{ID:id,
										 whb:whb,wrbC:wrbC,we:we,wpbT:wpbT,wb:wb,wl:wl,wwbC:wwbC,wm:wm,wn:wn,midcell:midcell,
										   unformalurt:unformalurt,urt:urt,abo:abo,rh:rh,hbsag:hbsag,hbsab:hbsab,
										   hbeag:hbeag,hbeab:hbeab,hbcab:hbcab,alt:alt,
										   cr:cr,wtsH:wtsH,treponema:treponema,elseItem:elseItem,doctorName:doctorName,checkTime:checkTime
							           },function(data){
							        	  alert("保存成功！^_^");
							           })
								} else {
									 $.post("nanaddorupdata.action",{ID:id,
										 whb:whb,wrbC:wrbC,we:we,wpbT:wpbT,wb:wb,wl:wl,wwbC:wwbC,wm:wm,wn:wn,midcell:midcell,
										   unformalurt:unformalurt,urt:urt,abo:abo,rh:rh,hbsag:hbsag,hbsab:hbsab,
										   hbeag:hbeag,hbeab:hbeab,hbcab:hbcab,alt:alt,
										   cr:cr,wtsH:wtsH,treponema:treponema,elseItem:elseItem,doctorName:doctorName,checkTime:checkTime
							           },function(data){
							        	  alert("保存成功！^_^");
							           })
								}
								
							})
						}
					})
			
		}) 