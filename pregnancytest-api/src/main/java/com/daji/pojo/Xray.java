package com.daji.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * X射线检查
 */
@Table(name = "xray")
public class Xray {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;//主键自增
    private String xrayid;//X射线号
    private String xrayview;//X射线所见
    private Integer check;//检查情况 1：心肺横隔未见明显异常或改变 2：检查禁忌和其他原因未查  3：存在异常情况 则往异常详情补充信息abnormal
    private String abnormal;//异常信息
    private String mid;//受检人编号(外)
    private Integer sex;//1：男2：女

    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
    }

    public String getXrayid() {
        return xrayid;
    }

    public void setXrayid(String xrayid) {
        this.xrayid = xrayid;
    }

    public String getXrayview() {
        return xrayview;
    }

    public void setXrayview(String xrayview) {
        this.xrayview = xrayview;
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

    @Override
    public String toString() {
        return "Xray{" +
                "autoId=" + autoid +
                ", xRayId='" + xrayid + '\'' +
                ", xRayview='" + xrayview + '\'' +
                ", check=" + check +
                ", abnormal='" + abnormal + '\'' +
                ", mid='" + mid + '\'' +
                ", sex=" + sex +
                '}';
    }
}
