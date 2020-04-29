package com.daji.serviceImplcyh;

import com.daji.daocyh.QueryBasicInformationFileMapper;
import com.daji.pojo.QueryBasicInformationFile;
import com.daji.servicecyh.QueryBasicInformationFileService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class QueryBasicInformationFileServiceImpl implements QueryBasicInformationFileService {
    @Autowired
    private QueryBasicInformationFileMapper queryBasicInformationFileMapper;
    public List<QueryBasicInformationFile> findQueryBasicInformationFile(QueryBasicInformationFile queryBasicInformationFile, @Param("pageNum")Integer pageNum, @Param("pageSize")Integer pageSize) {
        queryBasicInformationFile.setPageNum(pageNum);
        queryBasicInformationFile.setPageSize(pageSize);
        return queryBasicInformationFileMapper.findQueryBasicInformationFile(queryBasicInformationFile);
    }

    public int findQueryBasicInformationFileSize(QueryBasicInformationFile queryBasicInformationFile) {
        return queryBasicInformationFileMapper.findQueryBasicInformationFileSize(queryBasicInformationFile);
    }

    public List<QueryBasicInformationFile> getMinfoAndInformation(Integer sex, Integer typeid, Integer pageNum, Integer pageSize, Date endServiceTime, Date beginServiceTime) {
        return queryBasicInformationFileMapper.getMinfoAndInformation(sex, typeid, pageNum, pageSize,endServiceTime,beginServiceTime);
    }

    public int getMinfoAndInformationSize(Integer sex, Integer typeid,Date endServiceTime,Date beginServiceTime) {
        return queryBasicInformationFileMapper.getMinfoAndInformationSize(sex, typeid,endServiceTime,beginServiceTime);
    }

    public List<QueryBasicInformationFile> getMinfoAndTherestAndInformation(QueryBasicInformationFile queryBasicInformationFile) {
        return queryBasicInformationFileMapper.getMinfoAndTherestAndInformation(queryBasicInformationFile);
    }

    public int getMinfoAndTherestAndInformationSize(QueryBasicInformationFile queryBasicInformationFile) {
        return queryBasicInformationFileMapper.getMinfoAndTherestAndInformationSize(queryBasicInformationFile);
    }
}
