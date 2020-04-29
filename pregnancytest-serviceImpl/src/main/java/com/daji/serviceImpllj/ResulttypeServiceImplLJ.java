package com.daji.serviceImpllj;

import com.daji.daolj.ResulttypeMapperLJ;
import com.daji.pojo.Resulttype;
import com.daji.servicelj.ResulttypeServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResulttypeServiceImplLJ implements ResulttypeServiceLJ {
    @Autowired
    private ResulttypeMapperLJ resulttypeMapperLJ;

    public List<Resulttype> resulttypecx() {
        return resulttypeMapperLJ.selectAll();
    }
}
