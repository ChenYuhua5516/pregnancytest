package com.daji.pojo;

/**
 * X射线检查
 */
public class Xray {
    private Integer autoId;//主键自增
    private String xRayId;//X射线号
    private String xRayview;//X射线所见
    private Integer check;//检查情况 1：心肺横隔未见明显异常或改变 2：检查禁忌和其他原因未查  3：存在异常情况 则往异常详情补充信息abnormal
    private String abnormal;//异常信息
    private String mid;//受检人编号(外)
    private Integer sex;//1：男2：女

    public Integer getAutoId() {
        return autoId;
    }

    public void setAutoId(Integer autoId) {
        this.autoId = autoId;
    }

    public String getxRayId() {
        return xRayId;
    }

    public void setxRayId(String xRayId) {
        this.xRayId = xRayId;
    }

    public String getxRayview() {
        return xRayview;
    }

    public void setxRayview(String xRayview) {
        this.xRayview = xRayview;
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
                "autoId=" + autoId +
                ", xRayId='" + xRayId + '\'' +
                ", xRayview='" + xRayview + '\'' +
                ", check=" + check +
                ", abnormal='" + abnormal + '\'' +
                ", mid='" + mid + '\'' +
                ", sex=" + sex +
                '}';
    }
}
