package com.daji.pojo;

/**
 * 婚前医学检查证明男女
 */
public class Prove {
    private Integer autoId;//主键
    private String mid;//受检人编号(外)
    private Integer sex;//1：男2：女

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

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Prove{" +
                "autoId=" + autoId +
                ", mid='" + mid + '\'' +
                ", sex=" + sex +
                '}';
    }
}
