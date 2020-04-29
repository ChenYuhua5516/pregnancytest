package com.daji.serviceImpllj;

import com.daji.daolj.MinfoMapperLJ;
import com.daji.pojo.Minfo;
import com.daji.servicelj.MinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MinfoServiceImplLJ implements MinfoServiceLJ {
    @Autowired
    private MinfoMapperLJ minfoMapperLJ;

    public int asdasxz(Minfo minfo) {
        return minfoMapperLJ.insert(minfo);
    }
}
