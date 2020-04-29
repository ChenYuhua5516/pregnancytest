package com.daji.serviceImpllj;

import com.daji.daolj.HasContentinfoMapperLJ;
import com.daji.pojo.Hascontentinfo;
import com.daji.servicelj.HasContentinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HasContentinfoServiceImplLJ implements HasContentinfoServiceLJ {
    @Autowired
    private HasContentinfoMapperLJ hasContentinfoMapperLJ;

    public List<Hascontentinfo> asdascx() {
        return hasContentinfoMapperLJ.selectAll();
    }
}
