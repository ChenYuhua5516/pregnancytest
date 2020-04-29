package com.daji.controllerlj;

import com.daji.pojo.Prove;
import com.daji.pojo.Result;
import com.daji.pojo.Resulttype;
import com.daji.pojo.Suggestinfo;
import com.daji.servicelj.ProveServiceLJ;
import com.daji.servicelj.ResultServiceLJ;
import com.daji.servicelj.ResulttypeServiceLJ;

import com.daji.servicelj.SuggestinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import javax.sound.midi.MidiChannel;
import java.util.List;

@Controller
public class PremaritalmanController {
    @Autowired
    private ResulttypeServiceLJ resulttypeServiceLJ;
    @Autowired
    private ResultServiceLJ resultServiceLJ;
    @Autowired
    private SuggestinfoServiceLJ suggestinfoServiceLJ;
    @Autowired
    private ProveServiceLJ proveServiceLJ;
    @RequestMapping("Premaritalmancx")
    public String qqq(Model model, Integer sex, HttpSession httpSession){
    httpSession.setAttribute("tishi",null);
        String mid="202001100000";
        httpSession.setAttribute("mid", mid);
        httpSession.setAttribute("sex",sex);
        List<Resulttype> list=resulttypeServiceLJ.resulttypecx();
        model.addAttribute("list",list);
        Suggestinfo suggestinfo=new Suggestinfo();
        suggestinfo.setMid(mid);
        suggestinfo.setSex(sex);
        List<Suggestinfo>list2=suggestinfoServiceLJ.suggestinfocx(suggestinfo);
        model.addAttribute("list2",list2);
        for (int i =0;i<list2.size();i++){
            for (int j =0;j<list.size();j++){
                if(list.get(j).getSid()==list2.get(i).getSid()){
                    list.get(j).setNewsid(true);}
            }
        }
        Result result=new Result();
        result.setMid(mid);
        result.setSex(sex);
        Result r=resultServiceLJ.resultcx(result);
        model.addAttribute("r",r);
        return "Premaritalman";
    }
    @RequestMapping("Premaritalmanxz")
    public String qqq(HttpSession httpSession,Result result, Integer sid[],Model model){
        String mid= (String) httpSession.getAttribute("mid");
        Integer sex= (Integer) httpSession.getAttribute("sex");
        Result r=new Result();
        r.setMid(mid);
        r.setSex(sex);
        Result r1=resultServiceLJ.resultcx(r);

        result.setAutoid(r1.getAutoid());
        resultServiceLJ.Resultxg(result);
        Prove prove=new Prove();
        prove.setMid(mid);
        prove.setSex(sex);
        proveServiceLJ.Provesc(prove);
        Suggestinfo suggestinfo=new Suggestinfo();
        suggestinfo.setMid(mid);
        suggestinfo.setSex(sex);
        suggestinfoServiceLJ.Suggestinfoxzsc(suggestinfo);
        int a=proveServiceLJ.Provexz(prove);
        for (int i=0;i<sid.length;i++){
            suggestinfo.setSid(sid[i]);
            suggestinfoServiceLJ.Suggestinfoxz(suggestinfo);
        }


        if(a>0){
            httpSession.setAttribute("tishi","新增成功");
        }else{
            httpSession.setAttribute("tishi","新增失败");
        }
        this.qqq(model,sex,httpSession);
        return "Premaritalman";
    }
}
