package com.daji.daolj;

import com.daji.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapperLJ extends tk.mybatis.mapper.common.Mapper<User>, tk.mybatis.mapper.additional.idlist.IdListMapper<User, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<User>, tk.mybatis.mapper.common.base.select.SelectMapper<User> {
}
