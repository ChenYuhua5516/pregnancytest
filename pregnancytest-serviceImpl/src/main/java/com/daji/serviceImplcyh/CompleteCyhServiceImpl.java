package com.daji.serviceImplcyh;

import com.daji.daocyh.CompleteCyhMapper;
import com.daji.pojo.Complete;
import com.daji.servicecyh.CompleteCyhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompleteCyhServiceImpl implements CompleteCyhService {
    @Autowired
    private CompleteCyhMapper completeCyhMapper;
    public int addComplete(Complete complete) {
        return completeCyhMapper.insert(complete);
    }
}
