package com.daji.daolj;

import com.daji.pojo.Nationinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NationinfoMapperLJ  extends tk.mybatis.mapper.common.Mapper<Nationinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Nationinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Nationinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Nationinfo> {
}
