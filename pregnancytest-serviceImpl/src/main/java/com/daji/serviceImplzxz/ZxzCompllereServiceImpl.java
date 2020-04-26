package com.daji.serviceImplzxz;

import com.daji.daozxz.ZxzCompleteMapper;
import com.daji.pojo.Complete;
import com.daji.servicezxz.ZxzCompllereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ZxzCompllereServiceImpl implements ZxzCompllereService {
    @Autowired
    ZxzCompleteMapper mapper;

    public Complete getCompleteByMidAndTypeId(String mid, Integer typeid, Integer sex) {
        return mapper.getCompleteByMidAndTypeId(mid, typeid, sex);
    }

    public int insert(Complete complete) {
        return mapper.insert(complete);
    }

    public int updateByMid(Complete complete) {
        return mapper.updateByMid(complete);
    }
}
