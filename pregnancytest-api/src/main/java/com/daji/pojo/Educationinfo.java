package com.daji.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 学历表
 */
public class Educationinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eid;//自增
    private String education;//学历名称

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    @Override
    public String toString() {
        return "Educationinfo{" +
                "eId=" + eid +
                ", education='" + education + '\'' +
                '}';
    }

}
