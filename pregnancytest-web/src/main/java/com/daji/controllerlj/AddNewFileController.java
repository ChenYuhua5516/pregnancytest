//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.daji.controllerlj;

import com.daji.pojo.*;
import com.daji.servicelj.ChecktypeinfoServiceLJ;
import com.daji.servicelj.EducationinfoServiceLJ;
import com.daji.servicelj.HasContentinfoServiceLJ;
import com.daji.servicelj.InformationServiceLJ;
import com.daji.servicelj.MinfoServiceLJ;
import com.daji.servicelj.NationinfoServiceLJ;
import com.daji.servicelj.OccupationinfoServiceLJ;
import com.daji.servicelj.PapersinfoServiceLJ;
import com.daji.servicelj.RegisteredinfoServiceLJ;
import com.daji.servicelj.TherestSericeLJ;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AddNewFileController {
    @Autowired
    private EducationinfoServiceLJ educationinfoServiceLJ;
    @Autowired
    private NationinfoServiceLJ nationinfoServiceLJ;
    @Autowired
    private OccupationinfoServiceLJ occupationinfoServiceLJ;
    @Autowired
    private RegisteredinfoServiceLJ registeredinfoServiceLJ;
    @Autowired
    private PapersinfoServiceLJ papersinfoServiceLJ;
    @Autowired
    private InformationServiceLJ informationServiceLJ;
    @Autowired
    private MinfoServiceLJ minfoServiceLJ;
    @Autowired
    private TherestSericeLJ therestSericeLJ;
    @Autowired
    private HasContentinfoServiceLJ hasContentinfoServiceLJ;
    @Autowired
    private ChecktypeinfoServiceLJ checktypeinfoServiceLJ;

    @RequestMapping("addNewFilecx")
    @ResponseBody
    public Object qwewqe(Model model) {
        TypeList typeList=new TypeList();
        List<Educationinfo> xueli = this.educationinfoServiceLJ.educationinfocx();
        typeList.setEducationinfoList(xueli);
        List<Nationinfo> minzu = this.nationinfoServiceLJ.asdascx();
        typeList.setNationinfoList(minzu);
        List<Occupationinfo> zhiye = this.occupationinfoServiceLJ.ocucx();
        typeList.setOccupationinfoList(zhiye);
        List<Registeredinfo> hukou = this.registeredinfoServiceLJ.dsaascx();
        typeList.setRegisteredinfoList(hukou);
        List<Papersinfo> zhengjian = this.papersinfoServiceLJ.asdasdcx();
        typeList.setPapersinfoList(zhengjian);
        List<Hascontentinfo> zhiqing = this.hasContentinfoServiceLJ.asdascx();
       typeList.setHascontentinfoList(zhiqing);
        List<Checktypeinfo> jiancha = this.checktypeinfoServiceLJ.asdascx();
       typeList.setChecktypeinfoList(jiancha);
        RandomUtil p = new RandomUtil();
        String mid = p.getRandomFileName();
        typeList.setNewmid(mid);
        return typeList;
    }

    @RequestMapping("addNewFileinsert")
    @ResponseBody
    public String dadas(Information information, Minfo minfo, Therest therest,String P1,String C1 ,String A1,String addressVillage) {
        String address = P1+C1+A1+addressVillage;

        therest.setAddress(address);

        int i=0;
        i+= this.therestSericeLJ.sdasasxz(therest);
        i+=  this.minfoServiceLJ.asdasxz(minfo);
        i+=  this.informationServiceLJ.sdasdasxz(information);
        return i==3?"true":"false";
    }
}
