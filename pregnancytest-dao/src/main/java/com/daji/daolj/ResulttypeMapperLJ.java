package com.daji.daolj;

import com.daji.pojo.Resulttype;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ResulttypeMapperLJ extends tk.mybatis.mapper.common.Mapper<Resulttype>, tk.mybatis.mapper.additional.idlist.IdListMapper<Resulttype, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Resulttype>, tk.mybatis.mapper.common.base.select.SelectMapper<Resulttype> {
}
