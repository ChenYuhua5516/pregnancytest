function syy(num,time1,time2,IsSuccess){
			if(num<=1){
				num=1;
				window.location.href="${pageContext.request.contextPath}/queryAllSms_send.action?strCurPage="+num+"&time1="+time1+"&time2="+time2+"&IsSuccess"+IsSuccess;
			}else{
				window.location.href="${pageContext.request.contextPath}/queryAllSms_send.action?strCurPage="+(num-1)+"&time1="+time1+"&time2="+time2+"&IsSuccess"+IsSuccess;
			}
		}
		
		function xyy(strCurPage,totalPages,time1,time2,IsSuccess){
			if(strCurPage>=totalPages){
				window.location.href="${pageContext.request.contextPath}/queryAllSms_send.action?strCurPage="+totalPages+"&time1="+time1+"&time2="+time2+"&IsSuccess"+IsSuccess;
			}else{
				window.location.href="${pageContext.request.contextPath}/queryAllSms_send.action?strCurPage="+(strCurPage+1)+"&time1="+time1+"&time2="+time2+"&IsSuccess"+IsSuccess;
			}
		}