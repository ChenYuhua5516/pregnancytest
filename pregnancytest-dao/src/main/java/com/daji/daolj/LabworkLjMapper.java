package com.daji.daolj;

import com.daji.pojo.Labwork;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LabworkLjMapper extends tk.mybatis.mapper.common.Mapper<Labwork>, tk.mybatis.mapper.additional.idlist.IdListMapper<Labwork, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Labwork>, tk.mybatis.mapper.common.base.select.SelectMapper<Labwork> {


}
