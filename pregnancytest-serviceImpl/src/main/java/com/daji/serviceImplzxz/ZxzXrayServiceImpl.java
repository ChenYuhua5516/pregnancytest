package com.daji.serviceImplzxz;

import com.daji.daozxz.ZxzXrayMapper;
import com.daji.pojo.Xray;
import com.daji.servicezxz.ZxzXrayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ZxzXrayServiceImpl implements ZxzXrayService {
    @Autowired
    ZxzXrayMapper zmapper;


    public Xray getXrayByMidAndSex(String mid, Integer sex) {
        return zmapper.getXrayByMidAndSex(mid, sex);
    }

    public int insert(Xray xray) {
        return zmapper.insert(xray);
    }

    public Integer updateByMidAndSex(Xray xray) {
        return  zmapper.updateByMidAndSex(xray);
    }
}
