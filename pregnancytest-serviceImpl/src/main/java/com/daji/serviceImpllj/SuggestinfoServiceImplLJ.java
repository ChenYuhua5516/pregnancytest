package com.daji.serviceImpllj;

import com.daji.daolj.SuggestinfoMapperLJ;
import com.daji.pojo.Suggestinfo;
import com.daji.servicelj.SuggestinfoServiceLJ;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuggestinfoServiceImplLJ implements SuggestinfoServiceLJ {
    @Autowired
    private SuggestinfoMapperLJ suggestinfoMapperLJ;

    public int Suggestinfoxz(Suggestinfo suggestinfo) {
        return suggestinfoMapperLJ.Suggestinfoxz(suggestinfo);
    }

    public int Suggestinfoxzsc(Suggestinfo suggestinfo) {
        return suggestinfoMapperLJ.delete(suggestinfo);
    }

    public List<Suggestinfo> suggestinfocx(Suggestinfo suggestinfo) {
        return suggestinfoMapperLJ.select(suggestinfo);
    }
}
