package com.daji.daolj;

import com.daji.pojo.Therest;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TherestMapperLJ extends tk.mybatis.mapper.common.Mapper<Therest>, tk.mybatis.mapper.additional.idlist.IdListMapper<Therest, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Therest>, tk.mybatis.mapper.common.base.select.SelectMapper<Therest> {
}
