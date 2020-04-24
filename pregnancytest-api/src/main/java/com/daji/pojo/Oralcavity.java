package com.daji.pojo;

/**
 * oralcavity口腔检查
 *
 */
public class Oralcavity {
    private Integer autoid;
    private String facility;//检查设备

    private String finding;//检查所见

    private  Integer check;//检查情况 1：检查正常 2：存在异常情况 则往异常详情补充信息abnormal

    private String abnormal;//异常信息

    private String  mid;//受检人编号(外)

    private Integer sex;//1：男2：女


    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
    }

    public String getFacility() {
        return facility;
    }

    public void setFacility(String facility) {
        this.facility = facility;
    }

    public String getFinding() {
        return finding;
    }

    public void setFinding(String finding) {
        this.finding = finding;
    }

    public Integer getCheck() {
        return check;
    }

    public void setCheck(Integer check) {
        this.check = check;
    }

    public String getAbnormal() {
        return abnormal;
    }

    public void setAbnormal(String abnormal) {
        this.abnormal = abnormal;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }
}
