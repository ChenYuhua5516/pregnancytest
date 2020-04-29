package com.daji.serviceImpllj;

import com.daji.daocyh.LabworkMapper;
import com.daji.daolj.LabworkLjMapper;
import com.daji.pojo.Labwork;
import com.daji.servicelj.LabworkServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabworkServiceImplLJ implements LabworkServiceLJ {
    @Autowired
    private LabworkLjMapper labworkMapper;
    public List<Labwork> selectMidandSex(Labwork labwork) {
        return labworkMapper.select(labwork);
    }
}
