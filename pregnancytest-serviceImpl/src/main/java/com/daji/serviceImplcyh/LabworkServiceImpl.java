package com.daji.serviceImplcyh;

import com.daji.daocyh.LabworkMapper;
import com.daji.pojo.Labwork;
import com.daji.servicecyh.LabworkService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
@Service
public class LabworkServiceImpl implements LabworkService {
    @Autowired
    private LabworkMapper labworkMapper;


    public Labwork findLabWorkById(Integer autoId) {
        Labwork labwork=new Labwork();
        labwork.setAutoid(autoId);

        return labworkMapper.selectOne(labwork);
    }

    public List<Labwork> findLabWorkBymidAndSex(Labwork labwork) {
        return labworkMapper.select(labwork);
    }

    public List<Labwork> findLabWorkBymidAndSexlimit(String mid,Integer sex, Integer pageNum, Integer pageSize)
    {

      List<Labwork> list = labworkMapper.findLabWorkBymidAndSexlimit(mid, sex, pageNum, pageSize);
return list;
    }

    public int addLabwork(Labwork labwork) {
        return labworkMapper.insert(labwork);
    }

    public int updateLabworkById(Labwork labwork) {
        return labworkMapper.updateByPrimaryKeySelective(labwork);
    }

    public int deleteLabWorkById(Integer autoid) {
        return labworkMapper.deleteByPrimaryKey(autoid);
    }
}
