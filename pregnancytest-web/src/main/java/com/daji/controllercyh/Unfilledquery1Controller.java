package com.daji.controllercyh;

import com.daji.pojo.QueryBasicInformationFile;
import com.daji.servicecyh.QueryBasicInformationFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class Unfilledquery1Controller {
    @Autowired
    private QueryBasicInformationFileService queryBasicInformationFileService;


    @RequestMapping("/getMinfoAndInformation")
    public Object getMinfoAndInformation(Integer sex, Integer typeid, Integer page, Integer limit, String endServiceTime, String beginServiceTime) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date begindate = null;
        Date enddate = null;
        if(endServiceTime!=null && endServiceTime!=""){

            enddate = sdf.parse(endServiceTime);
        }
        if(beginServiceTime!=null && beginServiceTime!=""){

            begindate = sdf.parse(beginServiceTime);

        }

        List<QueryBasicInformationFile> list =  queryBasicInformationFileService.getMinfoAndInformation(sex,typeid,(page-1)*limit, limit,enddate,begindate);
        Integer count = queryBasicInformationFileService.getMinfoAndInformationSize(sex, typeid,enddate,begindate);
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("code",0);
        map.put("msg","");
        map.put("count",count);
        map.put("data",list);
        return map;
    }
}
