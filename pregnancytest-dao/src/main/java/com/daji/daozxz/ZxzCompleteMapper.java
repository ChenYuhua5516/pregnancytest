package com.daji.daozxz;

import com.daji.pojo.Complete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface ZxzCompleteMapper extends tk.mybatis.mapper.common.Mapper<Complete> {

    /**
     * @param mid 受检人编号
     * @param typeid 受检项目
     * @param sex 性别
     * @return 检查项目的信息
     */
    @Select("select * from complete where `mid`=#{mid} and typeid=#{typeid} and sex=#{sex}")
    Complete getCompleteByMidAndTypeId(@Param("mid") String mid, @Param("typeid") Integer typeid, @Param("sex") Integer sex);
    /**
     * 新增受检人的婚检项目完成信息
     * @param complete 婚检项目信息
     * @return 影响行数
     */
       int insert(Complete complete);
    /**
     * 修改受检人的婚检项目完成信息
     * @param complete 婚检项目信息
     * @return 影响行数
     */
        @Update("update complete set typeid=#{typeid},doctorname=#{doctorname},createdate=#{createdate} where sex=#{sex} and `mid`=#{mid}")
       int updateByMid(Complete complete);
}
