package com.daji.daolj;

import com.daji.daocyh.BaseMapper;
import com.daji.pojo.Suggestinfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SuggestinfoMapperLJ extends BaseMapper<Suggestinfo> {
    @Insert("insert into Suggestinfo(mid,sid,sex)values(#{mid},#{sid},#{sex})")
    public int Suggestinfoxz(Suggestinfo suggestinfo);

}
