package com.daji.serviceImpllj;

import com.daji.daolj.ResultMapperLJ;
import com.daji.pojo.Result;
import com.daji.servicelj.ResultServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResultServiceImplLJ implements ResultServiceLJ {
    @Autowired
    private ResultMapperLJ resultMapperLJ;
    public Result resultcx(Result result) {
        return resultMapperLJ.resultcx(result);
    }

    public int Resultxz(Result result) {
        return resultMapperLJ.insert(result);
    }

    public int Resultxg(Result result) {
        return resultMapperLJ.updateByPrimaryKeySelective(result);
    }

    public int Resultsc(Result result) {
        return resultMapperLJ.delete(result);
    }
}
