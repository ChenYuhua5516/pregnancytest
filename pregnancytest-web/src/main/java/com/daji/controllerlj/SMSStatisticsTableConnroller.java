package com.daji.controllerlj;

import com.daji.pojo.Smsstatiscstable;
import com.daji.servicelj.Koqiangservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class SMSStatisticsTableConnroller {
    @Autowired
    private Koqiangservice koqiangservice;
    @RequestMapping("SMSStatisticsTablecx")
    @ResponseBody
    public Object asdas(String mid, String kaishi, String jieshu, Integer whether,Integer limit ,Integer page) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date kaishidate = null;
        Date jieshuate = null;
        if(kaishi!=null && kaishi!=""){
            kaishidate=simpleDateFormat.parse(kaishi);
        }

        if(jieshu!=null && jieshu!=""){
            jieshuate=simpleDateFormat.parse(jieshu);
        }

        List<Smsstatiscstable> list=koqiangservice.tjcx(mid,kaishidate,jieshuate,whether, limit,(page-1)*limit);
        int count=koqiangservice.tjcxSize(mid, kaishidate, jieshuate, whether);
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("code",0);
        map.put("msg","");
        map.put("count",count);
        map.put("data",list);
        return map;
    }
}
