package com.daji.controllercyh;

import com.daji.pojo.Labwork;
import com.daji.pojo.Minfo;
import com.daji.servicecyh.LabworkService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PremaritalSettingsController {
    @Autowired
    private LabworkService labworkService;

    @RequestMapping("/findLabWorkById")
    public Object findLabWorkById(HttpSession session,Integer autoid) {
        Labwork labwork = labworkService.findLabWorkById(autoid);
        return labwork;
    }


        @RequestMapping("/findLabWorkBymidAndSex")
    public Object findLabWorkBymidAndSex(HttpSession session, Integer page, Integer limit){

     /*  Minfo minfo= (Minfo) session.getAttribute("minfo");
       Labwork labwork = new Labwork();
        labwork.setMid(minfo.getMid());*/
        Labwork labwork = new Labwork();
        labwork.setMid("2020011000001");
        List<Labwork> list = labworkService.findLabWorkBymidAndSexlimit("2020011000001", null, (page-1)*limit, limit);
        Integer count = labworkService.findLabWorkBymidAndSex(labwork).size();
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("code",0);
        map.put("msg","");
        map.put("count",count);
        map.put("data",list);
        return map;
    }

    @RequestMapping(value="/addLabwork",produces="application/json;charset=utf-8")
    public String addLabwork(Labwork labwork,HttpSession session){
          /*  Minfo minfo= (Minfo) session.getAttribute("minfo");
      */
        labwork.setMid("2020011000001");
        int i = labworkService.addLabwork(labwork);
        return i>0 ? "true":"false";
    }

    @RequestMapping(value="/updateLabworkById",produces="application/json;charset=utf-8")
    public String updateLabworkBymidAndSex(Labwork labwork,HttpSession session){
        /*  Minfo minfo= (Minfo) session.getAttribute("minfo");
         */
        labwork.setMid("2020011000001");
        int i = labworkService.updateLabworkById(labwork);
        return i>0 ? "true":"false";
    }

    @RequestMapping(value="/deleteLabWorkById",produces="application/json;charset=utf-8")
    public String deleteLabWorkById(Integer autoid){
        int i = labworkService.deleteLabWorkById(autoid);
        return i>0 ? "true":"false";
    }
}
