package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Smsstatiscstable {
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date sendtime;
    private String mid;
    private Integer whether;
    private String message;
    private String fcellphonenum;
    private String fname;
    private String fidcard;

    private String isor="否";
    public Date getSendtime() {
        return sendtime;
    }

    public void setSendtime(Date sendtime) {
        this.sendtime = sendtime;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public Integer getWhether() {
        return whether;
    }

    public void setWhether(Integer whether) {
        if(whether==1){
            this.isor="是";
        }
        this.whether = whether;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getFcellphonenum() {
        return fcellphonenum;
    }

    public void setFcellphonenum(String fcellphonenum) {
        this.fcellphonenum = fcellphonenum;
    }

    public String getFidcard() {
        return fidcard;
    }

    public void setFidcard(String fidcard) {
        this.fidcard = fidcard;
    }

    public String getIsor() {
        return isor;
    }

    public void setIsor(String isor) {
        this.isor = isor;
    }
}
