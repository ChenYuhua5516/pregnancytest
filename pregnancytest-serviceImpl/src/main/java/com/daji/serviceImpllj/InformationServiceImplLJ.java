package com.daji.serviceImpllj;

import com.daji.daolj.InformationMapperLJ;
import com.daji.pojo.Information;
import com.daji.servicelj.InformationServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InformationServiceImplLJ implements InformationServiceLJ {
    @Autowired
    private InformationMapperLJ informationMapperLJ;

    public int sdasdasxz(Information information) {
        return informationMapperLJ.insert(information);
    }
}
