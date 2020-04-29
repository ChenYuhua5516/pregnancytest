package com.daji.serviceImpllj;

import com.daji.daolj.ProveMapperLJ;
import com.daji.pojo.Prove;
import com.daji.servicelj.ProveServiceLJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProveServiceImplLJ implements ProveServiceLJ {
    @Autowired
    private ProveMapperLJ proveMapperLJ;
    public int Provexz(Prove prove) {
        return proveMapperLJ.insert(prove);
    }

    public int Provesc(Prove prove) {
        return proveMapperLJ.delete(prove);
    }
}
