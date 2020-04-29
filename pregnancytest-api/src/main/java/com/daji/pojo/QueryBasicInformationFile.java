package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Id;
import java.util.Date;

/**
 * 基础信息
 */
public class QueryBasicInformationFile {
    @Id
    private Integer autoid;
    private Integer fage;
    private String address;
    private String fcellphonenum;
    private String message;
private Integer ty;
    private Integer cid;
    private String mid;//编号
    private String fname;//妻子姓名
    private String fidcard;//妻子证件号码
    private String mcellPhoneNum;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String fbirthdate;//妻子出生日期
    private String mname;//丈夫姓名
    private String midcard;//丈夫证件号码
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String mbirthdate;//丈夫出生日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date servicetime;//建档日期
    private String checktype;//登记类型
    private Integer assess;//评估状态
    private Integer frist=1;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
  private  Date endServiceTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date beginServiceTime;
    private Integer pg;
    private Integer fs=2;
    private String yemid;
    private String asstext="未评估";
private Integer check;
private Integer sex;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getTy() {
        return ty;
    }

    public void setTy(Integer ty) {
        this.ty = ty;
    }

    public String getMcellPhoneNum() {
        return mcellPhoneNum;
    }

    public Integer getFage() {
        return fage;
    }

    public void setFage(Integer fage) {
        this.fage = fage;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFcellphonenum() {
        return fcellphonenum;
    }

    public void setFcellphonenum(String fcellphonenum) {
        this.fcellphonenum = fcellphonenum;
    }

    public Integer getCheck() {
        return check;
    }

    public void setCheck(Integer check) {
        this.check = check;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public void setMcellPhoneNum(String mcellPhoneNum) {
        this.mcellPhoneNum = mcellPhoneNum;
    }

    public Integer getFrist() {
        return frist;
    }

    public void setFrist(Integer frist) {
        this.frist = frist;
    }

    public String getYemid() {
        return yemid;
    }

    public void setYemid(String yemid) {
        if(this.pg==1){
        if (yemid!=null){
           this.asstext="已评估";
        }else{
            this.asstext="未评估";
        }
        }else{
            this.asstext="未评估";
        }
        this.yemid = yemid;
    }

    public Integer getFs() {
        return fs;
    }

    public void setFs(Integer fs) {
        this.fs = fs;
    }

    public Integer getPg() {
        return pg;
    }

    public void setPg(Integer pg) {
if(pg==2) {
    this.asstext = "未评估";
}else{

    this.asstext = "已评估";
}
        this.pg = pg;
    }

    private Integer pageNum;
private Integer pageSize;

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Date getEndServiceTime() {
        return endServiceTime;
    }

    public void setEndServiceTime(Date endServiceTime) {
        this.endServiceTime = endServiceTime;
    }

    public Date getBeginServiceTime() {
        return beginServiceTime;
    }

    public void setBeginServiceTime(Date beginServiceTime) {
        this.beginServiceTime = beginServiceTime;
    }

    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getFidcard() {
        return fidcard;
    }

    public void setFidcard(String fidcard) {
        this.fidcard = fidcard;
    }

    public String getFbirthdate() {
        return fbirthdate;
    }

    public void setFbirthdate(String fbirthdate) {
        this.fbirthdate = fbirthdate;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getMidcard() {
        return midcard;
    }

    public void setMidcard(String midcard) {
        this.midcard = midcard;
    }

    public String getMbirthdate() {
        return mbirthdate;
    }

    public void setMbirthdate(String mbirthdate) {
        this.mbirthdate = mbirthdate;
    }

    public Date getServicetime() {
        return servicetime;
    }

    public void setServicetime(Date servicetime) {
        this.servicetime = servicetime;
    }

    public String getChecktype() {
        return checktype;
    }

    public void setChecktype(String checktype) {
        this.checktype = checktype;
    }


    public String getAsstext() {
        return asstext;
    }

    public void setAsstext(String asstext) {
        this.asstext = asstext;
    }

    public Integer getAssess() {
        return assess;
    }

    public void setAssess(Integer assess) {


        this.assess = assess;
    }
}
