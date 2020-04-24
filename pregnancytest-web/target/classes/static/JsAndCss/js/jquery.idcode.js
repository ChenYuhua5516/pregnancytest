(function($){
	var settings = {
			e	 		: 'idcode',
			codeType 	: { name : 'follow', len: 4},
			codeTip		: 'refresh?',
			inputID		: 'Txtidcode'          //引用验证码输入框Id
		};
	
	var settings2 = {
			e	 		: 'idcode2',
			codeType 	: { name : 'follow', len: 4},
			codeTip		: 'refresh?',
			inputID		: 'Txtidcode2'          //引用验证码输入框Id
		};
	
	var settings3 = {
			e	 		: 'idcode3',
			codeType 	: { name : 'follow', len: 4},
			codeTip		: 'refresh?',
			inputID		: 'Txtidcode3'          //引用验证码输入框Id
		};
	var _set = {
		storeLable  : 'codeval',
		store		: '#ehong-code-input',
		codeval		: '#ehong-code'
	}
	
	var _set2 = {
			storeLable  : 'codeval2',
			store		: '#ehong-code-input2',
			codeval		: '#ehong-code2'
	}
	
	var _set3 = {
			storeLable  : 'codeval3',
			store		: '#ehong-code-input',
			codeval	    : '#ehong-code'
	}
	//1
	$.idcode = {
		getCode:function(option){
			_commSetting(option);
			return _storeData(_set.storeLable, null);
		},
		setCode:function(option){
			_commSetting(option);
			_setCodeStyle("#"+settings.e, settings.codeType.name, settings.codeType.len);
			
		},
		validateCode:function(option){
			_commSetting(option);
			var inputV;
			if(settings.inputID){
				inputV=$('#' + settings.inputID).val();
			}else{
				inputV=$(_set.store).val();
			}
			
			if(inputV == _storeData(_set.storeLable, null)){
				return true;
			}else{
				_setCodeStyle("#"+settings.e, settings.codeType.name, settings.codeType.len);				
				return false;
			}
		}
	};
	
	function _commSetting(option){
		$.extend(settings, option);		
	}
	
	function _storeData(dataLabel, data){
		var store = $(_set.codeval).get(0);			
		if(data){
			$.data(store, dataLabel, data);			
		}else{
			return $.data(store, dataLabel);			
		}
	}
	
	function _setCodeStyle(eid, codeType, codeLength){
		var codeObj = _createCode(settings.codeType.name, settings.codeType.len);		
		var randNum = Math.floor(Math.random()*6);
		var htmlCode=''
		if(!settings.inputID){
			htmlCode='<span><input id="ehong-code-input" type="text" maxlength="4" /></span>';
		}
		htmlCode+='<div id="ehong-code" class="ehong-idcode-val ehong-idcode-val';
		htmlCode+=String(randNum);
		htmlCode+='" href="#" onblur="return false" onfocus="return false" oncontextmenu="return false" onclick="$.idcode.setCode()">' + _setStyle(codeObj) + '</div>' + '<span id="ehong-code-tip-ck" class="ehong-code-val-tip" onclick="$.idcode.setCode()">'/*+ settings.codeTip*/ +'</span>';
		$(eid).html(htmlCode);
		_storeData(_set.storeLable, codeObj);		
	}
	
	function _setStyle(codeObj){
		var fnCodeObj = new Array();
		var col = new Array('#BF0C43', '#E69A2A','#707F02','#18975F','#BC3087','#73C841','#780320','#90719B','#1F72D8','#D6A03C','#6B486E','#243F5F','#16BDB5');
		var charIndex;
	   	for(var i=0;i<codeObj.length;i++){		
			charIndex = Math.floor(Math.random()*col.length);
			fnCodeObj.push('<font color="' + col[charIndex] + '">' + codeObj.charAt(i) + '</font>');
		}
		return fnCodeObj.join('');		
	}
	function _createCode(codeType, codeLength){
	   var codeObj;
	   if(codeType=='follow'){
		   codeObj = _createCodeFollow(codeLength);
	   }else if(codeType=='calc'){
		   codeObj = _createCodeCalc(codeLength);
	   }else{
		   codeObj="";
	   }
	   return codeObj;   
	 }
	 
	 function _createCodeCalc(codeLength){
	   var code1, code2, codeResult;
	   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9');	
	   var charIndex;
	   for(var i=0;i<codeLength;i++){		
		   charIndex = Math.floor(Math.random()*selectChar.length);
		   code1 +=selectChar[charIndex];
		   
		   charIndex = Math.floor(Math.random()*selectChar.length);
		   code2 +=selectChar[charIndex];		   
	   }
	   return [parseInt(code1), parseInt(code2) , parseInt(code1) + parseInt(code2)] ;
	 }
	 
	 function _createCodeFollow(codeLength){
	   var code = "";
	   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
		
	   for(var i=0;i<codeLength;i++){		
		   var charIndex = Math.floor(Math.random()*selectChar.length);
		   if(charIndex % 2 == 0){
			   code+=selectChar[charIndex].toLowerCase();
		   }else{
			   code +=selectChar[charIndex];
		   }	   
	   }
	   return code;
	 }
   
	 
	//2
		$.idcode2 = {
			getCode:function(option){
				_commSetting2(option);
				return _storeData2(_set2.storeLable, null);
			},
			setCode2:function(option){
				_commSetting2(option);
				_setCodeStyle2("#"+settings2.e, settings2.codeType.name, settings2.codeType.len);
			},
			validateCode2:function(option){
				_commSetting2(option);
				var inputV;
				if(settings2.inputID){
					inputV=$('#' + settings2.inputID).val();
				}else{
					inputV=$(_set2.store).val();
				}
				
				if(inputV == _storeData2(_set2.storeLable, null)){
					return true;
				}else{
					_setCodeStyle2("#"+settings2.e, settings2.codeType.name, settings2.codeType.len);				
					return false;
				}
			}
		};
		
		function _commSetting2(option){
			$.extend(settings2, option);		
		}
		
		function _storeData2(dataLabel, data){
			var store = $(_set2.codeval).get(0);			
			if(data){
				$.data(store, dataLabel, data);			
			}else{
				return $.data(store, dataLabel);			
			}
		}
		
		function _setCodeStyle2(eid, codeType, codeLength){
			var codeObj = _createCode2(settings2.codeType.name, settings2.codeType.len);		
			var randNum = Math.floor(Math.random()*6);
			var htmlCode2=''
			if(!settings2.inputID){
				htmlCode2='<span><input id="ehong-code-input2" type="text" maxlength="4" /></span>';
			}
			htmlCode2+='<div id="ehong-code2" class="ehong-idcode-val ehong-idcode-val';
			htmlCode2+=String(randNum);
			htmlCode2+='" href="#" onblur="return false" onfocus="return false" oncontextmenu="return false" onclick="$.idcode2.setCode2()">' + _setStyle2(codeObj) + '</div>' + '<span id="ehong-code-tip-ck" class="ehong-code-val-tip" onclick="$.idcode2.setCode2()">'/*+ settings.codeTip*/ +'</span>';
			$(eid).html(htmlCode2);
			_storeData2(_set2.storeLable, codeObj);		
		}
		
		function _setStyle2(codeObj){
			var fnCodeObj = new Array();
			var col = new Array('#BF0C43', '#E69A2A','#707F02','#18975F','#BC3087','#73C841','#780320','#90719B','#1F72D8','#D6A03C','#6B486E','#243F5F','#16BDB5');
			var charIndex;
		   	for(var i=0;i<codeObj.length;i++){		
				charIndex = Math.floor(Math.random()*col.length);
				fnCodeObj.push('<font color="' + col[charIndex] + '">' + codeObj.charAt(i) + '</font>');
			}
			return fnCodeObj.join('');		
		}
		function _createCode2(codeType, codeLength){
		   var codeObj;
		   if(codeType=='follow'){
			   codeObj = _createCodeFollow2(codeLength);
		   }else if(codeType=='calc'){
			   codeObj = _createCodeCalc2(codeLength);
		   }else{
			   codeObj="";
		   }
		   return codeObj;   
		 }
		 
		 function _createCodeCalc2(codeLength){
		   var code1, code2, codeResult;
		   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9');	
		   var charIndex;
		   for(var i=0;i<codeLength;i++){		
			   charIndex = Math.floor(Math.random()*selectChar.length);
			   code1 +=selectChar[charIndex];
			   
			   charIndex = Math.floor(Math.random()*selectChar.length);
			   code2 +=selectChar[charIndex];		   
		   }
		   return [parseInt(code1), parseInt(code2) , parseInt(code1) + parseInt(code2)] ;
		 }
		 
		 function _createCodeFollow2(codeLength){
		   var code = "";
		   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
			
		   for(var i=0;i<codeLength;i++){		
			   var charIndex = Math.floor(Math.random()*selectChar.length);
			   if(charIndex % 2 == 0){
				   code+=selectChar[charIndex].toLowerCase();
			   }else{
				   code +=selectChar[charIndex];
			   }	   
		   }
		   return code;
		 }
		 
		 
		//3
			$.idcode3 = {
				getCode:function(option){
					_commSetting3(option);
					return _storeData3(_set3.storeLable, null);
				},
				setCode3:function(option){
					_commSetting3(option);
					_setCodeStyle3("#"+settings3.e, settings3.codeType.name, settings3.codeType.len);
					
				},
				validateCode3:function(option){
					_commSetting3(option);
					var inputV;
					if(settings3.inputID){
						inputV=$('#' + settings3.inputID).val();
					}else{
						inputV=$(_set3.store).val();
					}
					
					if(inputV == _storeData3(_set3.storeLable, null)){
						return true;
					}else{
						_setCodeStyle3("#"+settings3.e, settings3.codeType.name, settings3.codeType.len);				
						return false;
					}
				}
			};
			
			function _commSetting3(option){
				$.extend(settings3, option);		
			}
			
			function _storeData3(dataLabel, data){
				var store = $(_set3.codeval).get(0);			
				if(data){
					$.data(store, dataLabel, data);			
				}else{
					return $.data(store, dataLabel);			
				}
			}
			
			function _setCodeStyle3(eid, codeType, codeLength){
				var codeObj = _createCode3(settings3.codeType.name, settings3.codeType.len);		
				var randNum = Math.floor(Math.random()*6);
				var htmlCode3=''
				if(!settings3.inputID){
					htmlCode='<span><input id="ehong-code-input" type="text" maxlength="4" /></span>';
				}
				htmlCode3+='<div id="ehong-code" class="ehong-idcode-val ehong-idcode-val';
				htmlCode3+=String(randNum);
				htmlCode3+='" href="#" onblur="return false" onfocus="return false" oncontextmenu="return false" onclick="$.idcode3.setCode3()">' + _setStyle(codeObj) + '</div>' + '<span id="ehong-code-tip-ck" class="ehong-code-val-tip" onclick="$.idcode3.setCode3()">'/*+ settings.codeTip*/ +'</span>';
				$(eid).html(htmlCode3);
				_storeData3(_set3.storeLable, codeObj);		
			}
			
			function _setStyle3(codeObj){
				var fnCodeObj = new Array();
				var col = new Array('#BF0C43', '#E69A2A','#707F02','#18975F','#BC3087','#73C841','#780320','#90719B','#1F72D8','#D6A03C','#6B486E','#243F5F','#16BDB5');
				var charIndex;
			   	for(var i=0;i<codeObj.length;i++){		
					charIndex = Math.floor(Math.random()*col.length);
					fnCodeObj.push('<font color="' + col[charIndex] + '">' + codeObj.charAt(i) + '</font>');
				}
				return fnCodeObj.join('');		
			}
			function _createCode3(codeType, codeLength){
			   var codeObj;
			   if(codeType=='follow'){
				   codeObj = _createCodeFollow3(codeLength);
			   }else if(codeType=='calc'){
				   codeObj = _createCodeCalc3(codeLength);
			   }else{
				   codeObj="";
			   }
			   return codeObj;   
			 }
			 
			 function _createCodeCalc3(codeLength){
			   var code1, code2, codeResult;
			   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9');	
			   var charIndex;
			   for(var i=0;i<codeLength;i++){		
				   charIndex = Math.floor(Math.random()*selectChar.length);
				   code1 +=selectChar[charIndex];
				   
				   charIndex = Math.floor(Math.random()*selectChar.length);
				   code2 +=selectChar[charIndex];		   
			   }
			   return [parseInt(code1), parseInt(code2) , parseInt(code1) + parseInt(code2)] ;
			 }
			 
			 function _createCodeFollow3(codeLength){
			   var code = "";
			   var selectChar = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
				
			   for(var i=0;i<codeLength;i++){		
				   var charIndex = Math.floor(Math.random()*selectChar.length);
				   if(charIndex % 2 == 0){
					   code+=selectChar[charIndex].toLowerCase();
				   }else{
					   code +=selectChar[charIndex];
				   }	   
			   }
			   return code;
			 }
			 
})(jQuery);