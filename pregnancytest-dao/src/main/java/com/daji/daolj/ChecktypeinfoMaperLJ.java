package com.daji.daolj;

import com.daji.pojo.Checktypeinfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChecktypeinfoMaperLJ extends tk.mybatis.mapper.common.Mapper<Checktypeinfo>, tk.mybatis.mapper.additional.idlist.IdListMapper<Checktypeinfo, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Checktypeinfo>, tk.mybatis.mapper.common.base.select.SelectMapper<Checktypeinfo> {
}
