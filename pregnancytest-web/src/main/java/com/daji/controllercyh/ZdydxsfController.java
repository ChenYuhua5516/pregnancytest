package com.daji.controllercyh;

import com.daji.pojo.Note;
import com.daji.pojo.QueryBasicInformationFile;
import com.daji.servicecyh.NoteCyhService;
import com.daji.servicecyh.QueryBasicInformationFileService;
import com.zhenzi.sms.ZhenziSmsClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ZdydxsfController {
    @Autowired
    private QueryBasicInformationFileService queryBasicInformationFileService;

    public static String apiUrl="https://sms_developer.zhenzikj.com";
    private static String appId="105523";
    private static String appSecret="a6d38f09-77db-4e8f-8d5e-978943cf6eed";
    @Autowired
    private NoteCyhService noteCyhService;

            @RequestMapping("getMinfoAndTherestAndInformation")
            public Object getMinfoAndTherestAndInformation (QueryBasicInformationFile queryBasicInformationFile, Integer page, Integer limit){
                queryBasicInformationFile.setPageSize(limit);
                queryBasicInformationFile.setPageNum((page-1)*limit);
                List<QueryBasicInformationFile> list =  queryBasicInformationFileService.getMinfoAndTherestAndInformation(queryBasicInformationFile);
                Integer count = queryBasicInformationFileService.getMinfoAndTherestAndInformationSize(queryBasicInformationFile);

                for(int i=0;i<list.size();i++){
                    for(int j=i+1;j<list.size();j++){
                           if(list.get(i).getMid().equals(list.get(j).getMid())){
                               list.remove(j);
                               count--;
                           }
                    }
                }



                Map<String,Object> map = new HashMap<String, Object>();
                map.put("code",0);
                map.put("msg","");
                map.put("count",count);
                map.put("data",list);
                return map;
            }

            @RequestMapping("addNote")
            @ResponseBody
            public Object addNote(String mid,String fcellphonenum,String message,Integer whether) throws Exception {
                int i=0;

            /*    ZhenziSmsClient client = new ZhenziSmsClient(apiUrl, appId, appSecret);
                Map<String, String> params = new HashMap<String, String>();
                params.put("message", message);
                params.put("number", "15526434063");
                String result = client.send(params);
               Integer ii = Integer.parseInt(result.substring(8,9));
               if(ii==0){*/
                   Note note=new Note();
                   note.setMessage(message);
                   note.setSendtime(new Date());
                   note.setMid(mid);
                   note.setSource(1);
                   note.setWhether(1);
                   note.setPhone(fcellphonenum);
                   i= noteCyhService.addNote(note);
/*
               }*/
                return i>0?"true":"false";
            }
}
