package com.daji.daolj;

import com.daji.pojo.Occupationinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OccupationinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Occupationinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Occupationinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Occupationinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Occupationinfo> {
}
