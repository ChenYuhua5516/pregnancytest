package com.daji.controllerlj;

import com.daji.daolj.Koqiang;
import com.daji.pojo.Complete;
import com.daji.pojo.Oralcavity;
import com.daji.pojo.Projecttype;
import com.daji.servicelj.Koqiangservice;
import javafx.scene.chart.PieChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Lj {
    @Autowired
    private Koqiangservice koqiangservice;

    @RequestMapping("kouqiang1")
    public String adsadsadw(Model model){
        String mid="123456";
        Integer sex=1;
        Oralcavity oralcavity1= koqiangservice.selectkq(mid,sex);
        Complete complete=koqiangservice.hjcx(mid,sex);
        model.addAttribute("list",oralcavity1);
        model.addAttribute("list1",complete);
        return "kouqiang";
    }
    @RequestMapping("/kouqiangAdd")
    public String qqq(Oralcavity oralcavity, Complete complete){
        String mid="123456";
        Integer sex=1;
        Oralcavity oralcavity1= koqiangservice.selectkq(mid,sex);
        if (oralcavity1!=null){
            oralcavity.setAutoid(oralcavity1.getAutoid());
            koqiangservice.kqxg(oralcavity);
        }else {
            oralcavity.setMid(mid);
            oralcavity.setSex(sex);
            koqiangservice.kqxz(oralcavity);
            Projecttype projecttype= koqiangservice.hjxmcx("口腔检查");
            complete.setTypeid(projecttype.getTypeid());
            complete.setMid(mid);
            complete.setSex(sex);
            koqiangservice.hjxz(complete);
        }
        return "index";
    }
}
