package com.daji.daolj;

import com.daji.pojo.Hascontentinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HasContentinfoMapperLJ extends tk.mybatis.mapper.common.Mapper<Hascontentinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Hascontentinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Hascontentinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Hascontentinfo> {
}
