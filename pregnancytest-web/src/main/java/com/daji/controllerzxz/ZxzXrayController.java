package com.daji.controllerzxz;

import com.daji.pojo.Complete;
import com.daji.pojo.Xray;
import com.daji.servicezxz.ZxzCompllereService;
import com.daji.servicezxz.ZxzXrayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
@RestController
public class ZxzXrayController {
    @Autowired
    ZxzXrayService zService;
    @Autowired
    ZxzCompllereService cService;


    @RequestMapping("/getXrayByMidAndSex")
    public Object getXrayByMidAndSex(HttpSession session){
        Xray xray = zService.getXrayByMidAndSex("20191225336452", 2);
        System.out.println(xray);
        return xray;
    }

    @RequestMapping("/getComplete")
    public Object getCompleteByMidAnd(HttpSession session,Integer typeid,Integer sex){
        Complete complete = cService.getCompleteByMidAndTypeId("20191225336452",typeid,sex);
        System.out.println(complete);
        return complete;
    }

    @RequestMapping("/XrayByMidAndSex")
    public String addXrayByMidAndSex(String cDateTime,Xray xray, HttpSession session,Complete com,Integer typeid,Integer cAutoId,Integer xAutoId) throws ParseException {
        System.out.println(xray);
        System.out.println(xAutoId);
        System.out.println(com);
        System.out.println("nimade");
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        Date date = null;
        date = df.parse(cDateTime);
        com.setCreatedate(date);
        xray.setMid("20191225336452");
        com.setMid("20191225336452");
        Xray xra = zService.getXrayByMidAndSex(xray.getMid(), xray.getSex());
        System.out.println(xAutoId);
        System.out.println(cAutoId);
        if (xra!=null){
            System.out.println("wuyucao");
            System.out.println(xAutoId);
            System.out.println(cAutoId);
            xray.setAutoid(xAutoId);
            com.setAutoid(cAutoId);
            Integer i = zService.updateByMidAndSex(xray);
            Integer j = cService.updateByMid(com);
            if (i>0 && j>0){
                System.out.println("修改成功！");
                return "uok";
            }else{
                return "uno";
            }
        }else{
            int i = zService.insert(xray);
            Complete complete = new Complete();
            complete.setCreatedate(com.getCreatedate());
            complete.setSex(xray.getSex());
            complete.setMid("20191225336452");
            complete.setTypeid(typeid);
            complete.setDoctorname(com.getDoctorname());
            int j = cService.insert(complete);
            if (i>0 && j>0){
                System.out.println("新增成功！");
                return "aok";
            }else{
                return "ano";
            }
        }

    }
}
