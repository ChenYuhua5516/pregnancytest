package com.daji.pojo;

import java.util.Date;

/**
 * 其他信息
 */
public class Therest {
    private Integer autoId;//自增
    private String mid;//受检人编号(外)
    private Integer hereid;//学历表id(女)（外）
    private Integer heroid;//职业表id(女)（外）
    private Integer herrid;//户口表id(女)（外）

    private Integer hireid;//学历表id(男)（外）
    private Integer hiroid;//职业表id(男)（外）
    private Integer hirrid;//户口表id(男)（外）
    private Date mtime;//结婚时间
    private Integer hid;//知情同意书表（外）
    private Integer cid;//检查类型表（外）
    private String address;//家庭地址

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
                "autoId=" + autoId +
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
