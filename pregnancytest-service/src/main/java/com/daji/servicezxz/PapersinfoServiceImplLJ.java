package com.daji.servicezxz;

import com.daji.daolj.PapersinfoMapperLJ;
import com.daji.pojo.Papersinfo;
import com.daji.servicelj.PapersinfoServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PapersinfoServiceImplLJ implements PapersinfoServiceLJ {
    @Autowired
    private PapersinfoMapperLJ papersinfoMapperLJ;
    public List<Papersinfo> asdasdcx() {
        return papersinfoMapperLJ.selectAll();
    }
}
