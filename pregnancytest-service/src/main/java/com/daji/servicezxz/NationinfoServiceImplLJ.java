package com.daji.servicezxz;

import com.daji.daolj.NationinfoMapperLJ;
import com.daji.pojo.Nationinfo;
import com.daji.servicelj.NationinfoServiceLJ;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NationinfoServiceImplLJ implements NationinfoServiceLJ {
    @Autowired
    private NationinfoMapperLJ nationinfoMapperLJ;
    public List<Nationinfo> asdascx() {
        return nationinfoMapperLJ.selectAll();
    }
}
