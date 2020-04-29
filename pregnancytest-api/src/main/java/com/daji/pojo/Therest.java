package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * 其他信息
 */
public class Therest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;//自增
    @Column(name = "`mid`")
    private String mid;//受检人编号(外)
    private Integer hereid;//学历表id(女)（外）
    private Integer heroid;//职业表id(女)（外）
    private Integer herrid;//户口表id(女)（外）

    private Integer hireid;//学历表id(男)（外）
    private Integer hiroid;//职业表id(男)（外）
    private Integer hirrid;//户口表id(男)（外）
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date mtime;//结婚时间
    private Integer hid;//知情同意书表（外）
    private Integer cid;//检查类型表（外）
    private String address;//家庭地址

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

    public Integer getHereid() {
        return hereid;
    }

    public void setHereid(Integer hereid) {
        this.hereid = hereid;
    }

    public Integer getHeroid() {
        return heroid;
    }

    public void setHeroid(Integer heroid) {
        this.heroid = heroid;
    }

    public Integer getHerrid() {
        return herrid;
    }

    public void setHerrid(Integer herrid) {
        this.herrid = herrid;
    }

    public Integer getHireid() {
        return hireid;
    }

    public void setHireid(Integer hireid) {
        this.hireid = hireid;
    }

    public Integer getHiroid() {
        return hiroid;
    }

    public void setHiroid(Integer hiroid) {
        this.hiroid = hiroid;
    }

    public Integer getHirrid() {
        return hirrid;
    }

    public void setHirrid(Integer hirrid) {
        this.hirrid = hirrid;
    }

    public Date getMtime() {
        return mtime;
    }

    public void setMtime(Date mtime) {
        this.mtime = mtime;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Therest{" +
                "autoId=" + autoid +
                ", mid='" + mid + '\'' +
                ", hereid=" + hereid +
                ", heroid=" + heroid +
                ", herrid=" + herrid +
                ", hireid=" + hireid +
                ", hiroid=" + hiroid +
                ", hirrid=" + hirrid +
                ", mtime=" + mtime +
                ", hid=" + hid +
                ", cid=" + cid +
                ", address='" + address + '\'' +
                '}';
    }
}
