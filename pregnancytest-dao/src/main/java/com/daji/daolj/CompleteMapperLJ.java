package com.daji.daolj;

import com.daji.pojo.Complete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CompleteMapperLJ extends tk.mybatis.mapper.common.Mapper<Complete>, tk.mybatis.mapper.additional.idlist.IdListMapper<Complete, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Complete>, tk.mybatis.mapper.common.base.select.SelectMapper<Complete> {
}
