package com.daji.controllerlj;

import com.daji.pojo.User;
import com.daji.servicelj.Koqiangservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class loginController {
    @Autowired
    private Koqiangservice koqiangservice;
    @RequestMapping("dl")
    @ResponseBody
    public String asdas(String uname,String upwd){
        User user=koqiangservice.denglucx(uname,upwd);
        if (user!=null){
            return "true";
        }
        return "false";
    }

}
