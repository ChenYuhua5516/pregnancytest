package com.daji.serviceImpllj;

import com.daji.daolj.CompleteMapperLJ;
import com.daji.pojo.Complete;
import com.daji.servicelj.CompleteServiceLJ;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompleteServiceImplLJ implements CompleteServiceLJ {
    @Autowired
    private CompleteMapperLJ completeMapperLJ;

    public Complete completecx(Complete complete) {
        return completeMapperLJ.selectOne(complete);
    }

    public int Completexz(Complete complete) {
        return completeMapperLJ.insert(complete);
    }

    public int Completesc(Complete complete) {
        return completeMapperLJ.delete(complete);
    }
}
