package com.daji.servicezxz;

import com.daji.pojo.Xray;
import org.apache.ibatis.annotations.Param;

public interface ZxzXrayService {
    /**
     *按照受检人的编号和性别查询x射线
     * @param mid 受检人的编号
     * @param sex 受检人的性别
     * @return 受检人的x射线结果
     */
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
    Integer updateByMidAndSex(Xray xray);
}
