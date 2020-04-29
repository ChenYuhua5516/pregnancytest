package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * 受检人档案信息
 */
public class Minfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;//主键
    @Column(name = "`mid`")
    private String mid;//受检人编号 日期 + 5位流水号
    private String mname;//男方姓名
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date mbirthdate;//男方出生日期
    private Integer mage;//男方年龄
    private String mcellphonenum;//男方电话
    private String memail;//男方邮箱

    private String fname;//女方姓名
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date fbirthdate;//女方出生日期
    private Integer fage;//女方年龄
    private String fcellphonenum;//女方电话
    private String femail;//女方邮箱
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date servicetime;//填写时间
    private String doctorname;//医生名字

    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
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

    public Date getMbirthdate() {
        return mbirthdate;
    }

    public void setMbirthdate(Date mbirthdate) {
        this.mbirthdate = mbirthdate;
    }

    public Integer getMage() {
        return mage;
    }

    public void setMage(Integer mage) {
        this.mage = mage;
    }

    public String getMcellphonenum() {
        return mcellphonenum;
    }

    public void setMcellphonenum(String mcellphonenum) {
        this.mcellphonenum = mcellphonenum;
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

    public Date getFbirthdate() {
        return fbirthdate;
    }

    public void setFbirthdate(Date fbirthdate) {
        this.fbirthdate = fbirthdate;
    }

    public Integer getFage() {
        return fage;
    }

    public void setFage(Integer fage) {
        this.fage = fage;
    }

    public String getFcellphonenum() {
        return fcellphonenum;
    }

    public void setFcellphonenum(String fcellphonenum) {
        this.fcellphonenum = fcellphonenum;
    }

    public String getFemail() {
        return femail;
    }

    public void setFemail(String femail) {
        this.femail = femail;
    }

    public Date getServicetime() {
        return servicetime;
    }

    public void setServicetime(Date servicetime) {
        this.servicetime = servicetime;
    }

    public String getDoctorname() {
        return doctorname;
    }

    public void setDoctorname(String doctorname) {
        this.doctorname = doctorname;
    }
}
