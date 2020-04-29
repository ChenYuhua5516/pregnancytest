package com.daji.serviceImpllj;

import com.daji.daolj.RegisteredinfoMapperLJ;
import com.daji.pojo.Registeredinfo;
import com.daji.servicelj.RegisteredinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisteredinfoServiceImplLJ implements RegisteredinfoServiceLJ {
    @Autowired
    private RegisteredinfoMapperLJ registeredinfoMapperLJ;
    public List<Registeredinfo> dsaascx() {
        return registeredinfoMapperLJ.selectAll();
    }
}
