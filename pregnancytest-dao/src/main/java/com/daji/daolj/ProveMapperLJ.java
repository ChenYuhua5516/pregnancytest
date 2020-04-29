package com.daji.daolj;

import com.daji.pojo.Prove;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProveMapperLJ extends tk.mybatis.mapper.common.Mapper<Prove>, tk.mybatis.mapper.additional.idlist.IdListMapper<Prove, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Prove>, tk.mybatis.mapper.common.base.select.SelectMapper<Prove> {
}
