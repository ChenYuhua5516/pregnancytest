package com.daji.daolj;

import com.daji.pojo.Information;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InformationMapperLJ extends tk.mybatis.mapper.common.Mapper<Information>, tk.mybatis.mapper.additional.idlist.IdListMapper<Information, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Information>, tk.mybatis.mapper.common.base.select.SelectMapper<Information> {
}
