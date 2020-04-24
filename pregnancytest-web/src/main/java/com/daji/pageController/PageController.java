package com.daji.pageController;

import com.daji.pojo.Dept;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PageController {
    @RequestMapping("/{page}")
    public String toPage(@PathVariable("page")String page){
        return page;
    }


}
