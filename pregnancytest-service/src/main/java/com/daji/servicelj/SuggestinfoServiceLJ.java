package com.daji.servicelj;

import com.daji.pojo.Suggestinfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface SuggestinfoServiceLJ {
    int Suggestinfoxz(Suggestinfo suggestinfo);
    int Suggestinfoxzsc(Suggestinfo suggestinfo);
    List<Suggestinfo> suggestinfocx(Suggestinfo suggestinfo);
}
