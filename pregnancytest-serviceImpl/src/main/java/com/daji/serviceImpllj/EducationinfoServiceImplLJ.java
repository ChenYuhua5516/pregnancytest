package com.daji.serviceImpllj;

import com.daji.daolj.EducationinfoMapperLJ;
import com.daji.pojo.Educationinfo;
import com.daji.servicelj.EducationinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EducationinfoServiceImplLJ implements EducationinfoServiceLJ {
    @Autowired
    private EducationinfoMapperLJ educationinfoMapperLJ;
    public List<Educationinfo> educationinfocx() {
        return educationinfoMapperLJ.selectAll();
    }
}
