package com.daji.serviceImplcyh;

import com.daji.daocyh.BmodlCyhMapper;
import com.daji.pojo.Bmode;
import com.daji.servicecyh.BmodlCyhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BmodlCyhServiceImpl implements BmodlCyhService {
    @Autowired
    private BmodlCyhMapper bmodlCyhMapper;
    public int addBmodl(Bmode bmode) {
        return bmodlCyhMapper.insert(bmode);
    }
}
