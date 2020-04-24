package com.daji.pojo;

/**
 * 学历表
 */
public class Educationinfo {
    private Integer eId;//自增
    private String education;//学历名称

    public Integer geteId() {
        return eId;
    }

    public void seteId(Integer eId) {
        this.eId = eId;
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
                "eId=" + eId +
                ", education='" + education + '\'' +
                '}';
    }

}
