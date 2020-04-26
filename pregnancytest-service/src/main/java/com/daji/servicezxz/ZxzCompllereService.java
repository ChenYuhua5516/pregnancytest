package com.daji.servicezxz;

import com.daji.pojo.Complete;
import org.apache.ibatis.annotations.Param;

public interface ZxzCompllereService {
    /**
     * @param mid 受检人编号
     * @param typeid 受检项目
     * @return 检查项目的信息
     */
    Complete getCompleteByMidAndTypeId(String mid, Integer typeid, Integer sex);
    /**
     * 增受检人的婚检项目完成信息
     * @param complete 婚检项目信息
     * @return 影响行数
     */
    int insert(Complete complete);
    /**
     * 修改受检人的婚检项目完成信息
     * @param complete 婚检项目信息
     * @return 影响行数
     */
    int updateByMid(Complete complete);
}
