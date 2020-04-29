package com.daji.controllercyh;

import com.daji.pojo.Bmode;
import com.daji.pojo.Complete;
import com.daji.servicecyh.BmodlCyhService;
import com.daji.servicecyh.CompleteCyhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
public class AddBmodlCyhController {
    @Autowired
    private BmodlCyhService bmodlCyhService;
    @Autowired
    private CompleteCyhService completeCyhService;

    @RequestMapping("/upload")
    public Object uploadaaa(MultipartFile file, HttpServletRequest request, HttpServletResponse response) throws IllegalStateException, IOException {
        //上传的位置
        String path =System.getProperty("user.dir")+"\\pregnancytest-web\\src\\main\\resources\\static\\bcimg\\";
        System.out.println(path);
        //判断该路径是否存在
        File file1 = new File(path);
        if (!file1.exists()) {
            file1.mkdirs();
        }
        System.out.println("成功---------------- ");
        //上传文件项
        String filename = file.getOriginalFilename();
        String uuid = UUID.randomUUID().toString().replace("-", "");
        String saveName = uuid + "_" + filename.substring(filename.lastIndexOf(File.separator) + 1);
        file.transferTo(new File(path, saveName));
        System.out.println(path+saveName);
        return "{\"code\":0,\"msg\":\""+saveName+"\"}";
    }

    @RequestMapping("/addCompleteAndBmodl")
    public String addCompleteAndBmodl(Bmode bmode, Complete complete, HttpSession session){
    /*   QueryBasicInformationFile queryBasicInformationFile = (QueryBasicInformationFile) session.getAttribute("queryBasicInformationFile");
       complete.setMid(queryBasicInformationFile.getMid());
    */   complete.setMid("2020011600003");
    bmode.setMid("2020011600003");
       complete.setSex(2);
       complete.setCreatedate(bmode.getCreaedata());
       complete.setTypeid(1);
       int i=0;
       i = bmodlCyhService.addBmodl(bmode);
       if(i>0){
          int s= completeCyhService.addComplete(complete);
          return s>0?"true":"false";
       }
       return "false";


    }

}
