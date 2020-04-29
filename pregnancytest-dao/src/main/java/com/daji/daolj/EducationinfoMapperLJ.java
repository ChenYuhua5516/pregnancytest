package com.daji.daolj;

import com.daji.pojo.Educationinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EducationinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Educationinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Educationinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Educationinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Educationinfo> {
}
