package com.daji.daolj;

import com.daji.pojo.Complete;
import com.daji.pojo.Oralcavity;
import com.daji.pojo.Projecttype;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface Koqiang {
    Oralcavity selectkq(@Param("mid") String mid,@Param("sex") Integer sex);
    int kqxz(Oralcavity oralcavity);
    int kqxg(Oralcavity oralcavity);
    int hjxz(Complete complete);
    Projecttype hjxmcx(String typename);
    Complete hjcx(@Param("mid") String mid,@Param("sex") Integer sex);
}
