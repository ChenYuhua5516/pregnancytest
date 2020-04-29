package com.daji.servicecyh;

import com.daji.pojo.QueryBasicInformationFile;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

public interface QueryBasicInformationFileService {
    List<QueryBasicInformationFile> findQueryBasicInformationFile(QueryBasicInformationFile queryBasicInformationFile, @Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize);
    int findQueryBasicInformationFileSize(QueryBasicInformationFile queryBasicInformationFile);
    List<QueryBasicInformationFile> getMinfoAndInformation(@Param("sex") Integer sex, @Param("typeid") Integer typeid, @Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize, @Param("endServiceTime") Date endServiceTime, @Param("beginServiceTime") Date beginServiceTime);
    int getMinfoAndInformationSize(@Param("sex") Integer sex, @Param("typeid") Integer typeid, @Param("endServiceTime") Date endServiceTime, @Param("beginServiceTime") Date beginServiceTime);
    List<QueryBasicInformationFile> getMinfoAndTherestAndInformation(QueryBasicInformationFile queryBasicInformationFile);
    int getMinfoAndTherestAndInformationSize(QueryBasicInformationFile queryBasicInformationFile);

}
