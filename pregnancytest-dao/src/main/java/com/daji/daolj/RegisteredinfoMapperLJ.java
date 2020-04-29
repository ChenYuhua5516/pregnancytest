package com.daji.daolj;

import com.daji.pojo.Registeredinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RegisteredinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Registeredinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Registeredinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Registeredinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Registeredinfo> {
}
