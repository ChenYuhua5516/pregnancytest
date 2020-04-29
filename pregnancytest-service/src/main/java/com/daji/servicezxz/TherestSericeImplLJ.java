package com.daji.servicezxz;

import com.daji.daolj.TherestMapperLJ;
import com.daji.pojo.Therest;
import com.daji.servicelj.TherestSericeLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TherestSericeImplLJ implements TherestSericeLJ {
    @Autowired
    private TherestMapperLJ therestMapperLJ;

    public int sdasasxz(Therest therest) {
        return therestMapperLJ.insert(therest);
    }
}
