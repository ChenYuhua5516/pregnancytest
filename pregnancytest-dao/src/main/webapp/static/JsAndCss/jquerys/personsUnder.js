function syy(num,time1,time2){
			if(num<=1){
				num=1;
				window.location.href="${pageContext.request.contextPath}/queryAllMInfo.action?strCurPage="+num+"&time1="+time1+"&time2="+time2;
			}else{
				window.location.href="${pageContext.request.contextPath}/queryAllMInfo.action?strCurPage="+(num-1)+"&time1="+time1+"&time2="+time2;
			}
		}
		
		function xyy(strCurPage,totalPages,time1,time2){
			if(strCurPage>=totalPages){
				window.location.href="${pageContext.request.contextPath}/queryAllMInfo.action?strCurPage="+totalPages+"&time1="+time1+"&time2="+time2;
			}else{
				window.location.href="${pageContext.request.contextPath}/queryAllMInfo.action?strCurPage="+(strCurPage+1)+"&time1="+time1+"&time2="+time2;
			}
		}