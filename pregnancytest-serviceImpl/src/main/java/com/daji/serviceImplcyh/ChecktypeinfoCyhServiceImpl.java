package com.daji.serviceImplcyh;

import com.daji.daocyh.ChecktypeinfoCyhMapper;
import com.daji.pojo.Checktypeinfo;
import com.daji.servicecyh.ChecktypeinfoCyhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChecktypeinfoCyhServiceImpl implements ChecktypeinfoCyhService {
    @Autowired
    private ChecktypeinfoCyhMapper checktypeinfoCyhMapper;
    public List<Checktypeinfo> findChecktypeinfo() {
        return checktypeinfoCyhMapper.selectAll();
    }
}
