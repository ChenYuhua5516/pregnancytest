package com.daji.serviceImpllj;

import com.daji.daolj.OccupationinfoMapperLJ;
import com.daji.pojo.Occupationinfo;
import com.daji.servicelj.OccupationinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OccupationinfoImplServiceLJ implements OccupationinfoServiceLJ {
    @Autowired
    private OccupationinfoMapperLJ occupationinfoMapperLJ;

    public List<Occupationinfo> ocucx() {
        return occupationinfoMapperLJ.selectAll();
    }
}
