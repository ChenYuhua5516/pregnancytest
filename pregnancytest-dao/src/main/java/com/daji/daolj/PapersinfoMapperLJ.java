package com.daji.daolj;

import com.daji.pojo.Papersinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PapersinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Papersinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Papersinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Papersinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Papersinfo> {
}
