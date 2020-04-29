package com.daji.controllerlj;

import com.daji.pojo.*;
import com.daji.servicecyh.LabworkService;
import com.daji.servicelj.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Controller
public class CheckResultControllre {


    @Autowired
    private LabworkServiceLJ labworkServiceLJ;
    @Autowired
    private ResultServiceLJ resultServiceLJ;
    @Autowired
    private CompleteServiceLJ completeServiceLJ;
    @Autowired
    private ResulttypeServiceLJ resulttypeServiceLJ;
    @Autowired
    private ProveServiceLJ proveServiceLJ;
    @Autowired
    private SuggestinfoServiceLJ suggestinfoServiceLJ;
    @RequestMapping("Labworkcx")
    public String qq(Model model, Integer sex, HttpSession httpSession){
        httpSession.setAttribute("tishi",null);
        String mid="202001100000";
        httpSession.setAttribute("mid",mid);
       httpSession.setAttribute("sex",sex);
        Labwork labwork=new Labwork();
        labwork.setMid(mid);
        labwork.setSex(sex);
        List<Labwork> list=labworkServiceLJ.selectMidandSex(labwork);
        model.addAttribute("list",list);
        Result result=new Result();
        result.setMid(mid);
        result.setSex(sex);
        Result r=resultServiceLJ.resultcx(result);
        model.addAttribute("r",r);
        Complete complete=new Complete();
        complete.setMid(mid);
        complete.setSex(sex);
        Complete c=completeServiceLJ.completecx(complete);
        model.addAttribute("c",c);
        List<Resulttype> list1=resulttypeServiceLJ.resulttypecx();
        model.addAttribute("list1",list1);
        Suggestinfo suggestinfo=new Suggestinfo();
        suggestinfo.setMid(mid);
        suggestinfo.setSex(sex);
        List<Suggestinfo>list2=suggestinfoServiceLJ.suggestinfocx(suggestinfo);
        model.addAttribute("list2",list2);
        for (int i =0;i<list2.size();i++){
            for (int j =0;j<list1.size();j++){
                if(list1.get(j).getSid()==list2.get(i).getSid()){
                list1.get(j).setNewsid(true);}
            }

        }
        return "checkResult";
    }
    @RequestMapping("insertandupdate")
    public String asdasa(Complete complete, Result result,Integer [] sid,HttpSession httpSession){
        String mid= (String) httpSession.getAttribute("mid");
        Integer sex= (Integer) httpSession.getAttribute("sex");
        Prove prove=new Prove();
        prove.setMid(mid);
        prove.setSex(sex);
        complete.setSex(sex);
        complete.setMid(mid);
        complete.setTypeid(4);
        complete.setCreatedate(new Date());
        Result re=new Result();
        re.setMid(mid);
        re.setSex(sex);
        Suggestinfo suggestinfo=new Suggestinfo();
        suggestinfo.setMid(mid);
        suggestinfo.setSex(sex);
        Result r=resultServiceLJ.resultcx(re);
        result.setMid(mid);
        result.setSex(sex);
        if (r!=null){
            result.setAutoid(r.getAutoid());
            int a=resultServiceLJ.Resultxg(result);
            suggestinfoServiceLJ.Suggestinfoxzsc(suggestinfo);
            for (int i=0;i<sid.length;i++){
                suggestinfo.setSid(sid[i]);
                suggestinfoServiceLJ.Suggestinfoxz(suggestinfo);
            }

                if(a>0){
                    httpSession.setAttribute("tishi","修改成功");
                }else{
                    httpSession.setAttribute("tishi","修改失败");
                }

        }else {
            resultServiceLJ.Resultxz(result);
            proveServiceLJ.Provexz(prove);
            int a=completeServiceLJ.Completexz(complete);
            for (int i=0;i<sid.length;i++){
                suggestinfo.setSid(sid[i]);
                suggestinfoServiceLJ.Suggestinfoxz(suggestinfo);
            }

                if(a>0){
                    httpSession.setAttribute("tishi","新增成功");
                }else{
                    httpSession.setAttribute("tishi","新增失败");
                }
            }

        return "checkResult";
    }
    @RequestMapping("shanchu")
    @ResponseBody
    public String qweqweq(HttpSession httpSession){
        Integer sex= (Integer) httpSession.getAttribute("sex");
        String mid= (String) httpSession.getAttribute("mid");
        Prove prove=new Prove();
        prove.setSex(sex);
        prove.setMid(mid);
        Complete complete=new Complete();
        complete.setSex(sex);
        complete.setMid(mid);
        Suggestinfo suggestinfo=new Suggestinfo();
        suggestinfo.setSex(sex);
        suggestinfo.setMid(mid);
        Result result=new Result();
        result.setSex(sex);
        result.setMid(mid);
        int i=0;
       i+= proveServiceLJ.Provesc(prove);
        i+=completeServiceLJ.Completesc(complete);
        i+=   suggestinfoServiceLJ.Suggestinfoxzsc(suggestinfo);
        i+= resultServiceLJ.Resultsc(result);
        return i>=4?"true":"false";
    }
}


