package com.daji.controllercyh;

import com.daji.pojo.Checktypeinfo;
import com.daji.pojo.QueryBasicInformationFile;
import com.daji.servicecyh.ChecktypeinfoCyhService;
import com.daji.servicecyh.QueryBasicInformationFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class QueryBasicInformationFileController {
    @Autowired
    private QueryBasicInformationFileService queryBasicInformationFileService;

   @Autowired
   private ChecktypeinfoCyhService checktypeinfoCyhService;

   @RequestMapping("/findChecktypeinfo")
   public Object findChecktypeinfo(){
       List<Checktypeinfo> list = checktypeinfoCyhService.findChecktypeinfo();
       return list;
   }

   @RequestMapping("/setSessionIN")
   public String setSessionIN(QueryBasicInformationFile queryBasicInformationFile, HttpSession session){
       session.setAttribute("queryBasicInformationFile",queryBasicInformationFile);
       System.out.println(queryBasicInformationFile);
       return "true";
   }

    @RequestMapping("/queryBasicInformationFileService")
    public Object f(QueryBasicInformationFile queryBasicInformationFile, Integer page, Integer limit){

       List<QueryBasicInformationFile> list =  queryBasicInformationFileService.findQueryBasicInformationFile(queryBasicInformationFile,(page-1)*limit, limit);
        Integer count = queryBasicInformationFileService.findQueryBasicInformationFileSize(queryBasicInformationFile);
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("code",0);
        map.put("msg","");
        map.put("count",count);
        map.put("data",list);
        return map;
    }
}
