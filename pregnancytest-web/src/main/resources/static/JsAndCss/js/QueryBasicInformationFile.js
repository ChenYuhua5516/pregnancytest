	function btnSelect(){
		var ID = $("#txtAutoID").val();
		//建档开始时间
		   var startTime = '1900-01-01';
		   if($("#startTime").val()!=''){
			startTime = $("#startTime").val()
		   }
			//建档结束时间
		var mydate = new Date();
		   var endTime = "" + mydate.getFullYear()+"-";
			 endTime += (mydate.getMonth()+1)+"-";
			endTime += mydate.getDate();
		   if($("#endTime").val()!=''){
			 endTime = $("#endTime").val()
		   }
       var evaluateResultDetail =$("#pinggu").val();//评估
       var K1 =$("#K1").val();//登记类型
       var bchao =$("#bchao").val();//B超
       var jianyan=$("#jianyan").val();//检验
		
		var fname = $("#txtFname").val();
		var fidCard = $("#txtFidCard").val();
		var mname = $("#txtMname").val();
		var midCard = $("#txtMidCard").val();
		$.post("BasicsInformationSelect.action",{ID:ID,fname:fname,mname:mname,fidCard:fidCard,midCard:midCard,evaluateResultDetail:evaluateResultDetail,endTime:endTime,startTime:startTime,K1:K1,bchao:bchao,jianyan:jianyan,strPageSize:10},function(data){
			var str = JSON.parse(data);
			var list = str.pageData;
			var result= "";
			$(".tab_tr").remove();
			$.each(list,function(i,item){
				var update = new Date(item.dUpDate);
                 oYear = update.getFullYear(),  
                 oMonth = update.getMonth()+1,  
                 oDay = update.getDate(),  
                 oHour = update.getHours(),  
                 oMin = update.getMinutes(),  
                 oSen = update.getSeconds(),  
                 uptime = oYear +'-'+oMonth+'-'+oDay;
                 var servicetime = new Date(item.serviceTime);
                 oYear = servicetime.getFullYear(),  
                 oMonth = servicetime.getMonth()+1,  
                 oDay = servicetime.getDate(),  
                 oHour = servicetime.getHours(),  
                 oMin = servicetime.getMinutes(),  
                 oSen = servicetime.getSeconds(),  
                 stime = oYear +'-'+oMonth+'-'+oDay;
				
       			var dflag ;
       			if(item.dUPFlag==1){
       				dflag ="是";
       			}else{
       				dflag="否";
       			}
       		 var pinggu;
             if(item.evaluateResultDetail==undefined){
                	pinggu="未评估";
                }else{
                	pinggu ="已评估";
                }
             var dengji;
             if(item.k1==undefined){
            	 dengji="无";
                }else{
                	dengji =item.k1;
                }
				
				result += "<tbody><tr class='tab_tr'  id='"+item.iD+"' onmouseover='chuanSid("+item.iD+")'><td>"+item.iD+"</td><td>"
				+item.fname+"</td><td>"+item.fidCard+"</td><td>"+item.fbirthDate
				+"</td><td>"+item.mname+"</td><td>"+item.midCard+"</td><td>"+
				item.mbirthDate+"</td><td>"+stime+"</td><td>"+
				dflag+"</td><td>"+uptime+"</td><td>"+
				item.preID+"</td><td>"+pinggu+"</td><td>"+dengji+"</td></tr></tbody>";
			});
				$("#table-hover_tr").after(result);
				
				
           		$("#page").paging({
    				pageNo:str.curPage,
    				totalPage: str.totalPages,
    				totalSize: str.totalRecords,
    				callback: function(num) {
    					 $.post("BasicsInformationSelect.action",
    			            		{ID:ID,fname:fname,mname:mname,fidCard:fidCard,midCard:midCard,evaluateResultDetail:evaluateResultDetail,endTime:endTime,startTime:startTime,K1:K1,bchao:bchao,jianyan:jianyan,strCurPage:num,strPageSize:10},
    			            		function(data){
    			            			var str = JSON.parse(data);
    			            			var list = str.pageData;
    			            			var result= "";
    			            			$(".tab_tr").remove();
    			            			$.each(list,function(i,item){
    			            				var update = new Date(item.dUpDate);
    			                             oYear = update.getFullYear(),  
    			                             oMonth = update.getMonth()+1,  
    			                             oDay = update.getDate(),  
    			                             oHour = update.getHours(),  
    			                             oMin = update.getMinutes(),  
    			                             oSen = update.getSeconds(),  
    			                             uptime = oYear +'-'+oMonth+'-'+oDay;
    			                             var servicetime = new Date(item.serviceTime);
    			                             oYear = servicetime.getFullYear(),  
    			                             oMonth = servicetime.getMonth()+1,  
    			                             oDay = servicetime.getDate(),  
    			                             oHour = servicetime.getHours(),  
    			                             oMin = servicetime.getMinutes(),  
    			                             oSen = servicetime.getSeconds(),  
    			                             stime = oYear +'-'+oMonth+'-'+oDay;
    			            				
    			                   			var dflag ;
    			                   			if(item.dUPFlag==1){
    			                   				dflag ="是";
    			                   			}else{
    			                   				dflag="否";
    			                   			}
    			                   		 var pinggu;
    			                         if(item.evaluateResultDetail==undefined){
    			                            	pinggu="未评估";
    			                            }else{
    			                            	pinggu ="已评估";
    			                            }
    			                         var dengji;
    			                         if(item.k1==undefined){
    			                        	 dengji="无";
    			                            }else{
    			                            	dengji =item.k1;
    			                            }
    			            				
    			            				result += "<tbody><tr class='tab_tr' id='"+item.iD+"' onmouseover='chuanSid("+item.iD+")'><td>"+item.iD+"</td><td>"
    			            				+item.fname+"</td><td>"+item.fidCard+"</td><td>"+item.fbirthDate
    			            				+"</td><td>"+item.mname+"</td><td>"+item.midCard+"</td><td>"+
    			            				item.mbirthDate+"</td><td>"+stime+"</td><td>"+
    			            				dflag+"</td><td>"+uptime+"</td><td>"+
    			            				item.preID+"</td><td>"+pinggu+"</td><td>"+dengji+"</td></tr></tbody>";
    			            			});
    			            				$("#table-hover_tr").after(result);
    			            })
    				}
    			})
		});
	};
	
	
	//获取档案编号
	var sid;
	function chuanSid(zsid){
		sid = zsid;
	}
	
		var options = {items:[
		  {header: '-功能-'},
		  {text: '选中此条', onclick:function() {selesttrallclick()}},
		  {divider: true},
		  {text: '基础信息登记', onclick:function(){ tiaozhuan(1)}},
		  {text: '妻子一般情况', onclick: function(){ tiaozhuan(2)}},
		  {text: '妻子体格检查', onclick: function(){ tiaozhuan(3)}},
		  {text: '妻子临床开单', onclick: function(){ tiaozhuan(4)}},
		  {text: '妻子临床检验', onclick: function(){ tiaozhuan(5)}},
		  {text: '妻子B超检查', onclick: function(){ tiaozhuan(6)}},
		  {divider: true},
		  {text: '丈夫一般情况', onclick: function(){ tiaozhuan(7)}},
		  {text: '丈夫体格检查', onclick:function(){ tiaozhuan(8)}},
		  {text: '丈夫临床检查', onclick: function(){ tiaozhuan(9)}},
		  {divider: true},
		  {text: '评估建议', onclick:function(){ tiaozhuan()}}
		]}
		$('#QuersaxcaTable').contextify(options);
		
		function selesttrallclick(){
			$.post("upSession.action",{sid:sid},function(data){
						
			});
			$("#"+sid+"").addClass("tr_color").siblings().removeClass("tr_color");
		}

		function tiaozhuan(num){
			$.post("upSession.action",{sid:sid},function(data){
					if(num == 1){
						window.location.href="newfile.action";
					}else if(num == 2){
						window.location.href="nvselectMInfoById.action";
					}else if(num == 3){
						window.location.href="check.action";
					}else if(num == 4){
						window.location.href="clinic.action";
					}else if(num == 5){
						window.location.href="Testwoman.action";
					}else if(num == 6){
						window.location.href="resultman.action";
					}else if(num == 7){
						window.location.href="selectMInfoById.action";
					}else if(num == 8){
						window.location.href="checkman.action";
					}else if(num == 9){
						window.location.href="clinicman.action";
					}
				});
		}
		
		
  function duqu(){
	  $.ajax({
          dataType: "JSONP", //返回值类型                   
          type: "get",//请求方式
          url: "http://localhost:9999/api/ReadMsg?Fp=1",//接口服务器地址
          success: function (data) {//返回值 data       	        	   
         	 if(data.sex=="女"){  //性别
         	 $("#txtFname").val(data.name);  //姓名
         	 $("#txtFidCard").val(data.cardno);   //身份证号  
         	                         		                               
         	 }else{        		
         		 $("#txtMname").val(data.name);        //姓名            	
             	 $("#txtMidCard").val(data.cardno);  //身份证号                     		 
         	   }                 			                            
          },
          error: function (e) {
              //失败执行
              alert("读取失败！");
          }
      });
  }