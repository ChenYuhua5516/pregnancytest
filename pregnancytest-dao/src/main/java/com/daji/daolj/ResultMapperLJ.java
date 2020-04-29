package com.daji.daolj;

import com.daji.pojo.Result;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ResultMapperLJ extends tk.mybatis.mapper.common.Mapper<Result>, tk.mybatis.mapper.additional.idlist.IdListMapper<Result, Long>, tk.mybatis.mapper.common.base.insert.InsertMapper<Result>, tk.mybatis.mapper.common.base.select.SelectMapper<Result> {
    @Select(" SELECT * FROM `result`  WHERE  `mid`=#{mid} AND sex =#{sex}")
    Result resultcx(Result result);


}
