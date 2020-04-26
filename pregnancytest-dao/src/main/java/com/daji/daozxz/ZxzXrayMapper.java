package com.daji.daozxz;

import com.daji.pojo.Xray;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface ZxzXrayMapper extends tk.mybatis.mapper.common.Mapper<Xray> {
    /**
     *按照受检人的编号和性别查询x射线
     * @param mid 受检人的编号
     * @param sex 受检人的性别
     * @return 受检人的x射线结果
     */
    @Select("SELECT * FROM xray WHERE `mid`=#{mid} AND sex=#{sex}")
    Xray getXrayByMidAndSex(@Param("mid") String mid, @Param("sex") Integer sex);

    /**
     * 新增受检人的x射线的信息
     * @param xray 新增的数据
     * @return 影响行数
     */
    int insert(Xray xray);

    /**
     * updateXrayByMidAndSex
     * @param xray 修改的数据
     * @return 影响行数
     */
    @Update("update xray SET xrayid=#{xrayid},xrayview=#{xrayview},`check`=#{check},abnormal=#{abnormal} where `mid`=#{mid} and sex=#{sex}")
    Integer updateByMidAndSex(Xray xray);
}
