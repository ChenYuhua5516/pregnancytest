	
	var ID;		
	var job;
	var m_sex ='男';						//性别
	var IsJiWangBingShi;				//既往病史
	var YiChuanXingJiBing;			//遗传性疾病
	var JingShenJiBing;				//精神疾病
	var XianTianXiangJiBing;			//先天性疾病
	var ChuanRanBing;				//传染病
	var XingBing;					//性病
	var ZhongYaoZangQi;				//重要脏器病
	var MiNiaoXiTongShengZhiJiBing;	//泌尿系统生殖疾病
	var JiBingName;					//疾病名字
	var JingShenFaBingNum;			//精神发病次数
	var JingShenFaBingDate;			//精神发病时间
	var IsFuYao;						//是否服药
	var SheHuiShengYingNengLi;		//社会适应能力
	var ShouShuShi;					//手术室
	var ShouShuName;					//手术名称
	var ShouShuDate;					//手术时间
	
	
	var XianBingShi;					//现病史
	var FeiHuoDongXingHBV;			//非活动性HBV携带者
	var ManXingHBV;					//慢性HBV携带者
	var MeiDuSuiFang;				//梅毒随访
	var FeiJieHeSuiFang;				//肺结核随访
	var XianBingQt;					//现病其他
	var XianBingMiaoShu;				//现病描述
	var HunYunShi;					//婚孕史
	var XianYouNan;					//先有男
	var XianYouNv;					//先有女
	var ZiNvIsJiBing;				//子女疾病
	var ZiNvJiBingName;				//子女是疾病名称
	var HunJianDate;					//婚检日期
	var DengJidoctor;				//登记医生
	
	function idBlur(){
		ID=$("#id").val();
		 $.post("tblSelect.action",
         		{ID:ID,m_sex:m_sex},
         		function(data){
         			var str =eval("("+data+")");
         			if(str.fjob==1){
         				$("#job").val("农民");
         			}else if(str.fjob==2){
         				$("#job").val("工人");
         			}else if(str.fjob==3){
         				$("#job").val("服务业");
         			}else if(str.fjob==4){
         				$("#job").val("经商");
         			}else if(str.fjob==5){
         				$("#job").val("家务");
         			}else if(str.fjob==6){
         				$("#job").val("教师/公务员/职员");
         			}else if(str.fjob==7){
         				$("#job").val("其他");
         			}
         			$("#id").val(str.iD);
					 IsJiWangBingShi=str.isJiWangBingShi;
					 if(str.isJiWangBingShi==1){
						 $(".bingshi:eq(0)").attr("checked",true); 
						 allChange();
					 }else if(str.isJiWangBingShi==0){
						 if(str.yiChuanXingJiBing==1){
							 $(".bingshi:eq(1)").attr("checked",true);
						 }
						 if(str.jingShenJiBing==1){
							 $(".bingshi:eq(2)").attr("checked",true);
						 }
						 if(str.xianTianXiangJiBing==1){
							 $(".bingshi:eq(3)").attr("checked",true);
						 }
						 if(str.chuanRanBing==1){
							 $(".bingshi:eq(4)").attr("checked",true);
						 }
						 if(str.xingBing==1){
							 $(".bingshi:eq(5)").attr("checked",true);
						 }
						 if(str.zhongYaoZangQi==1){
							 $(".bingshi:eq(6)").attr("checked",true);
						 }
						 if(str.miNiaoXiTongShengZhiJiBing==1){
							 $(".bingshi:eq(7)").attr("checked",true);
						 }
						 $("#JiBingName").val(str.jiBingName);
						 $("#JingShenFaBingNum").val(str.jingShenFaBingNum);
						 if(str.jingShenFaBingDate!=undefined){
							 var date =  new Date(str.jingShenFaBingDate);
				     		 var y = 1900+date.getYear();
				     		 var m = "0"+(date.getMonth()+1);
				     		 var d = "0"+date.getDate();
				     		 var strjingShenFaBingDate= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
				     		 $("#JingShenFaBingDate").val(strjingShenFaBingDate);
	 	            		}
					 }
					 if(str.isFuYao==0){
						 $('input[name="IsFuYao"]:eq(0)').attr("checked",true);
					 }else if(str.isFuYao==1){
						 $('input[name="IsFuYao"]:eq(1)').attr("checked",true);
					 }
					 
					 if(str.sheHuiShengYingNengLi==0){
						 $('input[name="SheHuiShengYingNengLi"]:eq(0)').attr("checked",true);
					 }else if(str.sheHuiShengYingNengLi==1){
						 $('input[name="SheHuiShengYingNengLi"]:eq(1)').attr("checked",true);
					 }else if(str.sheHuiShengYingNengLi==2){
						 $('input[name="SheHuiShengYingNengLi"]:eq(2)').attr("checked",true);
					 }else if(str.sheHuiShengYingNengLi==3){
						 $('input[name="SheHuiShengYingNengLi"]:eq(3)').attr("checked",true);
					 }else if(str.sheHuiShengYingNengLi==4){
						 $('input[name="SheHuiShengYingNengLi"]:eq(4)').attr("checked",true);
					 }
					 
					 if(str.shouShuShi==0){
						 $('input[name="ShouShuShi"]:eq(0)').attr("checked",true);
					 }else if(str.shouShuShi==1){
						 $('input[name="ShouShuShi"]:eq(1)').attr("checked",true);
						 ShouShuShi();
						 $("#ShouShuName").val(str.shouShuName);
						 
						 if(str.shouShuDate!=undefined){
							 var date =  new Date(str.shouShuDate);
				     		 var y = 1900+date.getYear();
				     		 var m = "0"+(date.getMonth()+1);
				     		 var d = "0"+date.getDate();
				     		 var strshouShuDate= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
							 $("#ShouShuDate").val(strshouShuDate);
	 	            		}
						 }
					 
					 if(str.xianBingShi==1){
						 $('input[name="XianBing"]:eq(0)').attr("checked",true);
						 XianBingShi();
					 }
					 if(str.feiHuoDongXingHBV==1){
						 $('input[name="XianBing"]:eq(1)').attr("checked",true);
					 }
					 if(str.manXingHBV==1){
						 $('input[name="XianBing"]:eq(2)').attr("checked",true);
					 }
					 if(str.meiDuSuiFang==1){
						 $('input[name="XianBing"]:eq(3)').attr("checked",true);
					 }
					 if(str.feiJieHeSuiFang==1){
						 $('input[name="XianBing"]:eq(4)').attr("checked",true);
					 }
					 if(str.xianBingQt==1){
						 $('input[name="XianBing"]:eq(5)').attr("checked",true);
						 otherRadio();
						 $("#otherText").val(str.xianBingMiaoShu);
					 }
					 
					 
					 if(str.hunYunShi==0){
						 $('input[name="HunYunShi"]:eq(0)').attr("checked",true);
						 HunYunShi();
					 }else if(str.hunYunShi==1){
						 $('input[name="HunYunShi"]:eq(1)').attr("checked",true);
						 HunYunShi();
						 $("#XianYouNan").val(str.xianYouNan);
						 $("#XianYouNv").val(str.xianYouNv);
						 if(str.ziNvIsJiBing==0){
							 $('input[name="ZiNvIsJiBing"]:eq(0)').attr("checked",true);
							 ZiNvIsJiBing();
							 $("#ZiNvIsJiBingText").val(str.ziNvJiBingName);
						 }else if(str.ziNvIsJiBing==1){
							 $('input[name="ZiNvIsJiBing"]:eq(1)').attr("checked",true);
							 ZiNvIsJiBing(); 
						 }
					 }else if(str.hunYunShi==2){
						 $('input[name="HunYunShi"]:eq(2)').attr("checked",true);
						 HunYunShi();
						 $("#XianYouNan").val(str.xianYouNan);
						 $("#XianYouNv").val(str.xianYouNv);
						 if(str.ziNvIsJiBing==0){
							 $('input[name="ZiNvIsJiBing"]:eq(0)').attr("checked",true);
							 ZiNvIsJiBing();
							 $("#ZiNvIsJiBingText").val(str.ziNvJiBingName);
						 }else if(str.ziNvIsJiBing==1){
							 $('input[name="ZiNvIsJiBing"]:eq(1)').attr("checked",true);
							 ZiNvIsJiBing(); 
						 }
					 }
					 
					 
					 
					 
					 $("#fname").val(str.fname);   
					 $("#mname").val(str.mname); 
					 if(str.hunJianDate!=undefined){
						 var date =  new Date(str.hunJianDate);
			     		 var y = 1900+date.getYear();
			     		 var m = "0"+(date.getMonth()+1);
			     		 var d = "0"+date.getDate();
			     		 var strhunJianDate= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
						 $("#HunJianDate").val(strhunJianDate);
							}
					 if(str.dengJidoctor!=""||str.dengJidoctor!=undefined){
						 $("#DengJidoctor").append("<option>"+str.dengJidoctor+"</option>");
		     			}
         		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function clickme(){
			var bingshi =document.getElementsByName("bingshi");
			for (var i = 0; i < bingshi.length; i++) {
				if(bingshi[i].checked){
					bingshi[i].value=1;
				}else{
					bingshi[i].value =0;
				}
			}
			
			var XianBing =document.getElementsByName("XianBing");
			for (var i = 0; i < XianBing.length; i++) {
				if(XianBing[i].checked){
					XianBing[i].value=1;
				}else{
					XianBing[i].value =0;
				}
			}
			
			
			IsJiWangBingShi =bingshi[0].value;
			YiChuanXingJiBing =bingshi[1].value;
			JingShenJiBing =bingshi[2].value;
			XianTianXiangJiBing =bingshi[3].value;
			ChuanRanBing =bingshi[4].value;
			XingBing =bingshi[5].value;
			ZhongYaoZangQi =bingshi[6].value;
			MiNiaoXiTongShengZhiJiBing =bingshi[7].value;
			JiBingName =$("#JiBingName").val();
			JingShenFaBingNum =$("#JingShenFaBingNum").val();
			IsFuYao =$('input[name="IsFuYao"]:checked').val();
			SheHuiShengYingNengLi =$('input[name="SheHuiShengYingNengLi"]:checked').val();
			ShouShuShi =$('input[name="ShouShuShi"]:checked').val();
			ShouShuName =$("#ShouShuName").val();
			
			
			
			
			XianBingShi =XianBing[0].value;				
			FeiHuoDongXingHBV=XianBing[1].value;		
			ManXingHBV =XianBing[2].value;		
			MeiDuSuiFang =XianBing[3].value;				
			FeiJieHeSuiFang =XianBing[4].value;			
			XianBingQt =XianBing[5].value;					
			XianBingMiaoShu=$("#otherText").val();	
			
				
			HunYunShi=$('input[name="HunYunShi"]:checked').val();				
			XianYouNan=$("#XianYouNan").val();					
			XianYouNv=$("#XianYouNv").val();					
			ZiNvIsJiBing=$('input[name="ZiNvIsJiBing"]:checked').val();				
			ZiNvJiBingName=$("#ZiNvIsJiBingText").val();	
			var JingShenFaBingDate = new Date();
			var ShouShuDate = new Date();
			JingShenFaBingDate =$("#JingShenFaBingDate").val();
			ShouShuDate =$("#ShouShuDate").val();
			 var mydate = new Date();
	  		 var endTime = "" + mydate.getFullYear()+"-";
	  			endTime += (mydate.getMonth()+1)+"-";
	  			endTime += mydate.getDate();
	  			HunJianDate=$("#HunJianDate").val();					
			if(HunJianDate==''){
				HunJianDate=endTime;
			}
			DengJidoctor=$("#DengJidoctor").val();
			ID=$("#id").val();
			if(ID!=""){
				 $.post("tblSave.action",
		            		{ID:ID,m_sex:m_sex,IsJiWangBingShi:IsJiWangBingShi,YiChuanXingJiBing:YiChuanXingJiBing,JingShenJiBing:JingShenJiBing,XianTianXiangJiBing:XianTianXiangJiBing,ChuanRanBing:ChuanRanBing,XingBing:XingBing,ZhongYaoZangQi:ZhongYaoZangQi,MiNiaoXiTongShengZhiJiBing:MiNiaoXiTongShengZhiJiBing,JiBingName:JiBingName,JingShenFaBingNum:JingShenFaBingNum,JingShenFaBingDate:JingShenFaBingDate,IsFuYao:IsFuYao,SheHuiShengYingNengLi:SheHuiShengYingNengLi,ShouShuShi:ShouShuShi,ShouShuName:ShouShuName,ShouShuDate:ShouShuDate,XianBingShi:XianBingShi,FeiHuoDongXingHBV:FeiHuoDongXingHBV,ManXingHBV:ManXingHBV,MeiDuSuiFang:MeiDuSuiFang,FeiJieHeSuiFang:FeiJieHeSuiFang,XianBingQt:XianBingQt,XianBingMiaoShu:XianBingMiaoShu,HunYunShi:HunYunShi,XianYouNan:XianYouNan,XianYouNv:XianYouNv,ZiNvIsJiBing:ZiNvIsJiBing,ZiNvJiBingName:ZiNvJiBingName,HunJianDate:HunJianDate,DengJidoctor:DengJidoctor},
		            		function(data){
		            			alert(data);
		            			idBlur();
		            		})
			}else{
		   		 alert("请选取用户后进行操作");
		   	 }
			
		}
		
		//既往病史
		
		//点击无的复选框后面的禁用
		function allChange(){
			if($('#allChange').is(':checked')) {
				//禁用
				$(".bingshi:gt(0)").attr("disabled","true");
				//取消复选框
				$('input[name="bingshi"]:gt(0)').attr("checked",false);
				//清空框
				$("#JiBingName").val("");
				$("#JingShenFaBingNum").val("");
				$("#JingShenFaBingDate").val("");
			}else{ 
				$(".bingshi:gt(0)").removeAttr("disabled")
				} 	
		}
		//点击无手术
		function ShouShuShi(){
			if($('input[name="ShouShuShi"]:checked').val()==0) {
				$("#ShouShuName").attr("disabled","true")
				$("#ShouShuDate").attr("disabled","true")
				$("#ShouShuName").val("");
				$("#ShouShuDate").val("");
			}else if($('input[name="ShouShuShi"]:checked').val()==1){ 
				$("#ShouShuName").removeAttr("disabled")
				$("#ShouShuDate").removeAttr("disabled")
			} 
		}
		//现病史
		function XianBingShi(){
			if($('#XianBingShi').is(':checked')) {
				//取消复选框
				$('input[name="XianBing"]:gt(0)').attr("checked",false);
				//清空框
				$("#otherText").val("");
				//禁用
				$(".XianBing:gt(0)").attr("disabled","true");
				$("#otherRadio").attr("checked",false);
				$("#otherText").attr("disabled","true");
			}else{ 
				$(".XianBing:gt(0)").removeAttr("disabled")
				} 
		}
		//现病史的其他按钮
		function otherRadio(){
			if($('#otherRadio').is(':checked')) {
				$("#otherText").removeAttr("disabled")
			}else{ 
				$("#otherText").attr("disabled","true")
				} 
		}
		//婚孕史
		function HunYunShi(){
			if($('input[name="HunYunShi"]:checked').val()==0) {
				//禁用
				$(".HunYunShi").attr("disabled","true");
				$("#ZiNvIsJiBingText").attr("disabled","true");
				//清空框
				$("#XianYouNan").val("");
				$("#XianYouNv").val("");
				$("#ZiNvIsJiBingText").val("");
			}else if($('input[name="HunYunShi"]:checked').val()==1){ 
				$(".HunYunShi").removeAttr("disabled");
				ZiNvIsJiBing();
			} else if($('input[name="HunYunShi"]:checked').val()==2){ 
				$(".HunYunShi").removeAttr("disabled");
				ZiNvIsJiBing();
			} 
		}
		//婚孕史子女疾病
		function ZiNvIsJiBing(){
			if($('input[name="ZiNvIsJiBing"]:checked').val()==0) {
				$("#ZiNvIsJiBingText").removeAttr("disabled");
				
			}else if($('input[name="ZiNvIsJiBing"]:checked').val()==1){ 
				$("#ZiNvIsJiBingText").attr("disabled","true");
				$("#ZiNvIsJiBingText").val("");
			} 
		}
		
		$(function(){
			idBlur();
			allChange();
			ShouShuShi();
			XianBingShi();
			otherRadio();
			HunYunShi();
			ZiNvIsJiBing();
		
		});
		
		
			

		
		