package com.daji.daocyh;

import com.daji.pojo.Labwork;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import java.util.List;
@Mapper
public interface LabworkMapper extends tk.mybatis.mapper.common.Mapper<Labwork> {

    @Select("<script> SELECT * FROM labwork WHERE `mid`=#{mid} <if test='sex!=null and sex!=0'>and sex=#{sex} </if>limit #{pageNum},#{pageSize}</script>")
    List<Labwork> findLabWorkBymidAndSexlimit (@Param("mid")String mid,@Param("sex")Integer sex,@Param("pageNum")Integer pageNum,@Param("pageSize")Integer pageSize);


}

