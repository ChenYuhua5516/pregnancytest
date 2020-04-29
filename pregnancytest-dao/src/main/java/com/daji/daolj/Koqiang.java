package com.daji.daolj;

import com.daji.pojo.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

@Mapper
public interface Koqiang {
    Oralcavity selectkq(@Param("mid") String mid,@Param("sex") Integer sex);
    int kqxz(Oralcavity oralcavity);
    int kqxg(Oralcavity oralcavity);
    int hjxz(Complete complete);
    Projecttype hjxmcx(String typename);
    Complete hjcx(@Param("mid") String mid,@Param("sex") Integer sex);
    int tjcxSize(@Param("mid") String mid, @Param("kaishi") Date kaishi, @Param("jieshu")Date jieshu, @Param("whether") Integer whether);
    List<Smsstatiscstable> tjcx(@Param("mid") String mid,@Param("kaishi") Date kaishi,@Param("jieshu")Date jieshu,@Param("whether") Integer whether,@Param("pageSize")Integer pageSize,@Param("pageNum")Integer pageNum);
    User denglucx(@Param("uname")String uname,@Param("upwd")String upwd);
}
