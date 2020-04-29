package com.daji.daocyh;

import tk.mybatis.mapper.additional.idlist.IdListMapper;
import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.base.insert.InsertMapper;
import tk.mybatis.mapper.common.base.select.SelectMapper;

public interface BaseMapper<T> extends Mapper<T>, IdListMapper<T,Long> , InsertMapper<T>, SelectMapper<T> {
}
