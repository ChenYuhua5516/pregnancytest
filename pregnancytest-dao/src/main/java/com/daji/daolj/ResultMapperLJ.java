package com.daji.daolj;

import com.daji.daocyh.BaseMapper;
import com.daji.pojo.Result;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ResultMapperLJ extends BaseMapper<Result> {
    @Select(" SELECT * FROM `result`  WHERE  `mid`=#{mid} AND sex =#{sex}")
    Result resultcx(Result result);


}
