package com.daji.pojo;

import java.util.Date;

/**
 * 受检人档案信息
 */
public class Minfo {
    private Integer autoId;//主键
    private String mid;//受检人编号 日期 + 5位流水号
    private String mname;//男方姓名
    private Date mbirthDate;//男方出生日期
    private Integer mage;//男方年龄
    private String mcellPhoneNum;//男方电话
    private String memail;//男方邮箱

    private String fname;//女方姓名
    private Date fbirthDate;//女方出生日期
    private Integer fage;//女方年龄
    private String fcellPhoneNum;//女方电话
    private String femail;//女方邮箱

    private Date serviceTime;//填写时间
    private String doctorName;//医生名字

    public Integer getAutoId() {
        return autoId;
    }

    public void setAutoId(Integer autoId) {
        this.autoId = autoId;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public Date getMbirthDate() {
        return mbirthDate;
    }

    public void setMbirthDate(Date mbirthDate) {
        this.mbirthDate = mbirthDate;
    }

    public Integer getMage() {
        return mage;
    }

    public void setMage(Integer mage) {
        this.mage = mage;
    }

    public String getMcellPhoneNum() {
        return mcellPhoneNum;
    }

    public void setMcellPhoneNum(String mcellPhoneNum) {
        this.mcellPhoneNum = mcellPhoneNum;
    }

    public String getMemail() {
        return memail;
    }

    public void setMemail(String memail) {
        this.memail = memail;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public Date getFbirthDate() {
        return fbirthDate;
    }

    public void setFbirthDate(Date fbirthDate) {
        this.fbirthDate = fbirthDate;
    }

    public Integer getFage() {
        return fage;
    }

    public void setFage(Integer fage) {
        this.fage = fage;
    }

    public String getFcellPhoneNum() {
        return fcellPhoneNum;
    }

    public void setFcellPhoneNum(String fcellPhoneNum) {
        this.fcellPhoneNum = fcellPhoneNum;
    }

    public String getFemail() {
        return femail;
    }

    public void setFemail(String femail) {
        this.femail = femail;
    }

    public Date getServiceTime() {
        return serviceTime;
    }

    public void setServiceTime(Date serviceTime) {
        this.serviceTime = serviceTime;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    @Override
    public String toString() {
        return "Minfo{" +
                "autoId=" + autoId +
                ", mid='" + mid + '\'' +
                ", mname='" + mname + '\'' +
                ", mbirthDate=" + mbirthDate +
                ", mage=" + mage +
                ", mcellPhoneNum='" + mcellPhoneNum + '\'' +
                ", memail='" + memail + '\'' +
                ", fname='" + fname + '\'' +
                ", fbirthDate=" + fbirthDate +
                ", fage=" + fage +
                ", fcellPhoneNum='" + fcellPhoneNum + '\'' +
                ", femail='" + femail + '\'' +
                ", serviceTime=" + serviceTime +
                ", doctorName='" + doctorName + '\'' +
                '}';
    }
}
