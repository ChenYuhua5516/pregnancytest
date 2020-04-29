package com.daji.serviceImpllj;

import com.daji.daolj.ChecktypeinfoMaperLJ;
import com.daji.pojo.Checktypeinfo;
import com.daji.servicelj.ChecktypeinfoServiceLJ;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChecktypeinfoServiceImplLJ implements ChecktypeinfoServiceLJ {
    @Autowired
    private ChecktypeinfoMaperLJ checktypeinfoMaperLJ;
    public List<Checktypeinfo> asdascx() {
        return checktypeinfoMaperLJ.selectAll();
    }
}
