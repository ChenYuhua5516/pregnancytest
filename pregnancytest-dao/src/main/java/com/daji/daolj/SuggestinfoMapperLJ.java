package com.daji.daolj;

import com.daji.pojo.Suggestinfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SuggestinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Suggestinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Suggestinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Suggestinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Suggestinfo> {
    @Insert("insert into Suggestinfo(mid,sid,sex)values(#{mid},#{sid},#{sex})")
    public int Suggestinfoxz(Suggestinfo suggestinfo);

}
