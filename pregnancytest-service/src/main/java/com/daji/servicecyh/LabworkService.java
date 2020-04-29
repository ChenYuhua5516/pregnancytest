package com.daji.servicecyh;

import com.daji.pojo.Labwork;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface LabworkService {
    Labwork findLabWorkById(@Param("autoId") Integer autoId);
    List<Labwork> findLabWorkBymidAndSex (Labwork labwork);
    List<Labwork> findLabWorkBymidAndSexlimit(@Param("mid") String mid, @Param("sex") Integer sex, @Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize);
    int addLabwork(Labwork labwork);
    int updateLabworkById(Labwork labwork);
    int deleteLabWorkById(Integer autoid);
}
