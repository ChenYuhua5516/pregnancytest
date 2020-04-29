package com.daji.daolj;

import com.daji.pojo.Minfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Minfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Minfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Minfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Minfo> {
}
