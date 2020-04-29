package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
//B超信息
public class Bmode {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer autoid;
    @Column(name = "`mid`")
    private String mid; //受检人编号(外)
    private Integer result;//检查结果 1：正常  2:不正常
    @Column(name = "`describe`")
    private String describe;//B超描述
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date  creaedata;// 检查日期

    private  String img;//B超图片

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

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public Date getCreaedata() {
        return creaedata;
    }

    public void setCreaedata(Date creaedata) {
        this.creaedata = creaedata;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
