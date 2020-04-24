var LODOP;//全局变量

 /**
  *  * @author JCX
  * @date ${time}
  * 品胜互联
  * 品胜互联科技有限公司
  * 参数详情请参考实体类
  */
 function CreateImage(LodopJson,SetLodop){
	 	LODOP=getLodop();
	 	LODOP.PRINT_INIT("条形码打印1");
	 	LODOP.SET_PRINT_PAGESIZE(1,SetLodop.pageWidth,SetLodop.pageHeight,"CreateCustomPage");
	 	LODOP.ADD_PRINT_TEXT(SetLodop.approximateTypeTop,SetLodop.approximateTypeLeft,SetLodop.approximateTypeWidth,SetLodop.approximateTypeHeight,LodopJson.approximateType);
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
	 	LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
	 	LODOP.ADD_PRINT_BARCODE(SetLodop.barValTop,SetLodop.barValLeft,SetLodop.barValWidth,SetLodop.barValHeight,"Code93",LodopJson.barVal);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.idTop,SetLodop.idLeft,SetLodop.idWidth,SetLodop.idHeight,LodopJson.id);
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.nameTop,SetLodop.nameLeft,SetLodop.nameWidth,SetLodop.nameHeight,LodopJson.name);
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.inspectionTypeTop,SetLodop.inspectionTypeLeft,SetLodop.inspectionTypeWidth,SetLodop.inspectionTypeHeight,LodopJson.inspectionType);
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.ageTop,SetLodop.ageLeft,SetLodop.ageWidth,SetLodop.ageHeight,LodopJson.age+"岁");
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.dataTop,SetLodop.dataLeft,SetLodop.dataWidth,SetLodop.dataHeight,LodopJson.data);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.sexTop,SetLodop.sexLeft,SetLodop.sexWidth,SetLodop.sexHeight,"("+LodopJson.sex+")");
	 	LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
	 	LODOP.ADD_PRINT_TEXT(SetLodop.detailedTypeTop,SetLodop.detailedTypeLeft,SetLodop.detailedTypeWidth,SetLodop.detailedTypeHeight,LodopJson.detailedType);
	 	LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
	 
	}

 /*
  * 直接打印
  */
function usPrint(LodopJson,SetLodop){
	for (var i = 0; i < LodopJson.length; i++) {
		CreateImage(LodopJson[i],SetLodop[0]);
		LODOP.PRINT();
	}
}

/*
 * 设计模式
 * 适用于开发模式,多张打印时不可用
 */
function usPrintDesign(LodopJson,SetLodop){
	for (var i = 0; i < LodopJson.length; i++) {
		CreateImage(LodopJson[i],SetLodop[0]);
		LODOP.PRINT_DESIGN();
	}
}

/*
 * 打印浏览
 * 适用于开发模式,多张打印时不可用
 */
function usPreview(LodopJson,SetLodop){
	for (var i = 0; i < LodopJson.length; i++) {
		CreateImage(LodopJson[i],SetLodop[0]);
		LODOP.PREVIEW();
	}
}



