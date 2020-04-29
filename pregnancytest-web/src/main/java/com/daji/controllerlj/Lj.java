package com.daji.controllerlj;

import com.daji.daolj.Koqiang;
import com.daji.pojo.Complete;
import com.daji.pojo.Oralcavity;
import com.daji.pojo.Projecttype;
import com.daji.servicelj.Koqiangservice;
import javafx.scene.chart.PieChart;
import org.apache.catalina.Session;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
public class Lj {
    @Autowired
    private Koqiangservice koqiangservice;


    @RequestMapping("kouqiang1")
    public String adsadsadw(Model model,Integer sex, HttpSession session){
        session.setAttribute("tishi",null);
        session.setAttribute("sex",sex);
        System.out.println("kouqiang1------------"+sex);
        String mid="123456";
        Oralcavity oralcavity1= koqiangservice.selectkq(mid,sex);
        Complete complete=koqiangservice.hjcx(mid,sex);
        model.addAttribute("list",oralcavity1);
        model.addAttribute("list1",complete);
        return "kouqiang";
    }
    @RequestMapping("/kouqiangAdd")
    public String qqq(Oralcavity oralcavity, Complete complete, Model model, HttpSession session){
        String mid="123456";
        Integer sex= (Integer) session.getAttribute("sex");
        System.out.println("kouqiang1------------"+sex);
        Oralcavity oralcavity1= koqiangservice.selectkq(mid,sex);
        if (oralcavity1!=null){
            oralcavity.setAutoid(oralcavity1.getAutoid());
          int i =  koqiangservice.kqxg(oralcavity);
          if(i>0){
              session.setAttribute("tishi","修改成功");
          }else{
              session.setAttribute("tishi","修改失败");
          }

        }else {
            oralcavity.setMid(mid);
            oralcavity.setSex(sex);
            koqiangservice.kqxz(oralcavity);
            Projecttype projecttype= koqiangservice.hjxmcx("口腔检查");
            complete.setTypeid(projecttype.getTypeid());
            complete.setMid(mid);
            complete.setSex(sex);
         int i =   koqiangservice.hjxz(complete);
            if(i>0){
                session.setAttribute("tishi","新增成功");
            }else{
                session.setAttribute("tishi","新增失败");
            }
        }
        Oralcavity oralcavity2= koqiangservice.selectkq(mid,sex);
        Complete complete1=koqiangservice.hjcx(mid,sex);
        model.addAttribute("list",oralcavity2);
        model.addAttribute("list1",complete1);
        return "kouqiang";
    }

}
