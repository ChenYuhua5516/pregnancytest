		  /**
			 * 查询旧版重要参数
			 */
				function oldlmParSelect(){
	          		 $.ajax({
	     					type:"post",
	     					url:"selectUpLoadPara.action",
	     					data:"",
	     					dataType:"text",
	     					success:function(data){
	     						var str=JSON.parse(data);
	     						for (var i = 0; i < str.length; i++) {
	     							var cap=str[i].capName;
	     							var par=str[i].parVal;
									if(cap=='GetServerUrlImage'){
										$("#formGroupInputSma1").val(par);
									}
									if(cap=='RegularLoginUrl'){
										$("#formGroupInputSma2").val(par);
									}
									if(cap=='LoginBoatInfo'){
										$("#formGroupInputSma3").val(par);
									}
									if(cap=='BaseInfoSaveUrl'){
										$("#formGroupInputSma4").val(par);
									}
									if(cap=='PSIDPREIDUrl'){
										$("#formGroupInputSma5").val(par);
									}
									if(cap=='QiZiYiBanQingKuangSaveUrl'){
										$("#formGroupInputSma6").val(par);
									}
									if(cap=='QiZiTiGeJianChaSaveUrlOne'){
										$("#formGroupInputSma7").val(par);
									}
									if(cap=='QiZiTiGeJianChaSaveUrlTwo'){
										$("#formGroupInputSma8").val(par);
									}
									if(cap=='QiZiKaiDanSaveUrl'){
										$("#formGroupInputSma9").val(par);
									}
									if(cap=='QiZiLiSUrl'){
										$("#formGroupInputSma10").val(par);
									}
									if(cap=='QiZiHuaYanSaveUrl'){
										$("#formGroupInputSma11").val(par);
									}
									if(cap=='QiZiBChaoTouBuUrl'){
										$("#formGroupInputSma12").val(par);
									}
									if(cap=='QiZiBChaoSaveUrl'){
										$("#formGroupInputSma13").val(par);
									}
									if(cap=='ZhangFuYiBanQingKuangSaveUrl'){
										$("#formGroupInputSma14").val(par);
									}
									if(cap=='ZhangFuTiGeJianChaSaveUrlOne'){
										$("#formGroupInputSma15").val(par);
									}
									if(cap=='ZhangFuTiGeJianChaSaveUrlTwo'){
										$("#formGroupInputSma16").val(par);
									}
									if(cap=='ZhangFuKaiDanSaveUrl'){
										$("#formGroupInputSma17").val(par);
									}
									if(cap=='ZhangFuLiSUrl'){
										$("#formGroupInputSma18").val(par);
									}
									if(cap=='ZhangFuHuaYanSaveUrl'){
										$("#formGroupInputSma19").val(par);
									}
									if(cap=='PingGuYiJianSaveUrl'){
										$("#formGroupInputSma20").val(par);
									}
									if(cap=='KuoZhanSaveUrlOne'){
										$("#formGroupInputSma21").val(par);
									}
									if(cap=='KuoZhanSaveUrlTwo'){
										$("#formGroupInputSma22").val(par);
									}
									if(cap=='HeadUrl'){
										$("#formGroupInputSma23").val(par);
									}
									
									
									
						    /* ------------------------复选框------------------------------ */
									if(cap=='NanHuaYianInfo'){
										$("#inlineCheckbox11_1").attr("checked",eval(par));
									}
									if(cap=='NanKaiDanInfo'){
										$("#inlineCheckbox5_1").attr("checked",eval(par));
									}
									if(cap=='NVYiBanQingKuang'){
										$("#inlineCheckbox2_1").attr("checked",eval(par));
									}
									if(cap=='NvChaoShengYingXiang'){
										$("#inlineCheckbox4_1").attr("checked",eval(par));
									}
									if(cap=='NvKaiDanInfo'){
										$("#inlineCheckbox9_1").attr("checked",eval(par));
									}
									if(cap=='NanTiGeJianCha'){
										$("#inlineCheckbox7_1").attr("checked",eval(par));
									}
									if(cap=='PingGuJianYiCheck'){
										$("#inlineCheckbox8_1").attr("checked",eval(par));
									}
									if(cap=='NvHuaYanInfo'){
										$("#inlineCheckbox10_1").attr("checked",eval(par));
									}
									if(cap=='NanYiBanQingKuang'){
										$("#inlineCheckbox3_1").attr("checked",eval(par));
									}
									if(cap=='NvTiGeJianCha'){
										$("#inlineCheckbox6_1").attr("checked",eval(par));
									}
									if(cap=='MInfo'){
										$("#inlineCheckbox1_1").attr("checked",eval(par));
									}
									if(cap=='YesNoAutomaticComplete'){
										$("#blankCheckbox1").attr("checked",eval(par));
									}
									if(cap=='ISIDUpToWeb'){
										$("#blankCheckbox2").attr("checked",eval(par));
									}
								}
	     					},
	     					error:function(){
	     					},
	     				});
				};
				
				
				
				
				/*function oldlmParUpdate(){
					var formGroupInputSma1=$("#formGroupInputSma1").val();
					var formGroupInputSma2=$("#formGroupInputSma2").val();
					var formGroupInputSma3=$("#formGroupInputSma3").val();
					var formGroupInputSma4=$("#formGroupInputSma4").val();
					var formGroupInputSma5=$("#formGroupInputSma5").val();
					var formGroupInputSma6=$("#formGroupInputSma6").val();
					var formGroupInputSma7=$("#formGroupInputSma7").val();
					var formGroupInputSma8=$("#formGroupInputSma8").val();
					var formGroupInputSma9=$("#formGroupInputSma9").val();
					var formGroupInputSma10=$("#formGroupInputSma10").val();
					var formGroupInputSma11=$("#formGroupInputSma11").val();
					var formGroupInputSma12=$("#formGroupInputSma12").val();
					var formGroupInputSma13=$("#formGroupInputSma13").val();
					var formGroupInputSma14=$("#formGroupInputSma14").val();
					var formGroupInputSma15=$("#formGroupInputSma15").val();
					var formGroupInputSma16=$("#formGroupInputSma16").val();
					var formGroupInputSma17=$("#formGroupInputSma17").val();
					var formGroupInputSma18=$("#formGroupInputSma18").val();
					var formGroupInputSma19=$("#formGroupInputSma19").val();
					var formGroupInputSma20=$("#formGroupInputSma20").val();
					var formGroupInputSma21=$("#formGroupInputSma21").val();
					var formGroupInputSma22=$("#formGroupInputSma22").val();
					var formGroupInputSma23=$("#formGroupInputSma23").val();
					
					var saveDataAry=[];  
					
                    var GetServerUrlImage={"GetServerUrlImage":formGroupInputSma1};  
                    var RegularLoginUrl={"RegularLoginUrl":formGroupInputSma2};
                    var LoginBoatInfo={"LoginBoatInfo":formGroupInputSma3};  
                    var BaseInfoSaveUrl={"BaseInfoSaveUrl":formGroupInputSma4}; 
                    var PSIDPREIDUrl={"PSIDPREIDUrl":formGroupInputSma5};  
                    var QiZiYiBanQingKuangSaveUrl={"QiZiYiBanQingKuangSaveUrl":formGroupInputSma6}; 
                    var QiZiTiGeJianChaSaveUrlOne={"QiZiTiGeJianChaSaveUrlOne":formGroupInputSma7};  
                    var QiZiTiGeJianChaSaveUrlTwo={"QiZiTiGeJianChaSaveUrlTwo":formGroupInputSma8}; 
                    var QiZiKaiDanSaveUrl={"QiZiKaiDanSaveUrl":formGroupInputSma9};  
                    var QiZiLiSUrl={"QiZiLiSUrl":formGroupInputSma10}; 
                    var QiZiHuaYanSaveUrl={"QiZiHuaYanSaveUrl":formGroupInputSma11}; 
                    var QiZiBChaoTouBuUrl={"QiZiBChaoTouBuUrl":formGroupInputSma12}; 
                    var QiZiBChaoSaveUrl={"QiZiBChaoSaveUrl":formGroupInputSma13}; 
                    var ZhangFuYiBanQingKuangSaveUrl={"ZhangFuYiBanQingKuangSaveUrl":formGroupInputSma14}; 
                    var ZhangFuTiGeJianChaSaveUrlOne={"ZhangFuTiGeJianChaSaveUrlOne":formGroupInputSma15};  
                    var ZhangFuTiGeJianChaSaveUrlTwo={"ZhangFuTiGeJianChaSaveUrlTwo":formGroupInputSma16}; 
                    var ZhangFuKaiDanSaveUrl={"ZhangFuKaiDanSaveUrl":formGroupInputSma17};  
                    var ZhangFuLiSUrl={"ZhangFuLiSUrl":formGroupInputSma18}; 
                    var ZhangFuHuaYanSaveUrl={"ZhangFuHuaYanSaveUrl":formGroupInputSma19};  
                    var PingGuYiJianSaveUrl={"PingGuYiJianSaveUrl":formGroupInputSma20}; 
                    var KuoZhanSaveUrlOne={"KuoZhanSaveUrlOne":formGroupInputSma21}; 
                    var KuoZhanSaveUrlTwo={"KuoZhanSaveUrlTwo":formGroupInputSma22}; 
                    var HeadUrl={"HeadUrl":formGroupInputSma23}; 
                    
                    saveDataAry.push(GetServerUrlImage,
                    				RegularLoginUrl,
                    				LoginBoatInfo,
                    				BaseInfoSaveUrl,
                    				PSIDPREIDUrl,QiZiYiBanQingKuangSaveUrl,
                    				QiZiTiGeJianChaSaveUrlOne,
                    				QiZiTiGeJianChaSaveUrlTwo,
                    				QiZiKaiDanSaveUrl,
                    				QiZiLiSUrl,
                    				QiZiHuaYanSaveUrl,
                    				QiZiBChaoTouBuUrl,
                    				QiZiLiSUrl,
                    				QiZiHuaYanSaveUrl,
                    				QiZiBChaoTouBuUrl,
                    				QiZiBChaoSaveUrl,
                    				ZhangFuYiBanQingKuangSaveUrl,
                    				ZhangFuTiGeJianChaSaveUrlOne,
                    				ZhangFuTiGeJianChaSaveUrlTwo,
                    				ZhangFuKaiDanSaveUrl,
                    				ZhangFuLiSUrl,
                    				ZhangFuHuaYanSaveUrl,
                    				PingGuYiJianSaveUrl,
                    				KuoZhanSaveUrlOne,
                    				KuoZhanSaveUrlTwo,
                    				HeadUrl);  
                    saveDataAry.push(RegularLoginUrl); 
                    saveDataAry.push(LoginBoatInfo);
                    saveDataAry.push(BaseInfoSaveUrl);
                    saveDataAry.push(PSIDPREIDUrl);
                    saveDataAry.push(QiZiYiBanQingKuangSaveUrl);
                    saveDataAry.push(QiZiTiGeJianChaSaveUrlOne);
                    saveDataAry.push(QiZiTiGeJianChaSaveUrlTwo);
                    saveDataAry.push(QiZiKaiDanSaveUrl);
                    saveDataAry.push(QiZiLiSUrl);
                    saveDataAry.push(QiZiHuaYanSaveUrl);
                    saveDataAry.push(QiZiBChaoTouBuUrl);
                    saveDataAry.push(QiZiBChaoSaveUrl);
                    saveDataAry.push(ZhangFuYiBanQingKuangSaveUrl);
                    saveDataAry.push(ZhangFuTiGeJianChaSaveUrlOne);
                    saveDataAry.push(ZhangFuTiGeJianChaSaveUrlTwo);
                    saveDataAry.push(ZhangFuKaiDanSaveUrl);
                    saveDataAry.push(ZhangFuLiSUrl);
                    saveDataAry.push(ZhangFuHuaYanSaveUrl);
                    saveDataAry.push(PingGuYiJianSaveUrl);
                    saveDataAry.push(KuoZhanSaveUrlOne);
                    saveDataAry.push(KuoZhanSaveUrlTwo);
                    saveDataAry.push(HeadUrl); 
                    
                    
				$.ajax({
 					type:"POST",
 					url:"updateUpLoadParVal.action",
 					contentType:"application/json",
 					data:JSON.stringify({"name":'周',"age":'29'}),  					
 					dataType:"json",
 					cache: false,
 					success:function(data){
 						
 					},
 					error:function(){
 						console.log(JSON.stringify({"name":'周',"age":'29'}));
 					},
				});
				};*/