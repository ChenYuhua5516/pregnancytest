package com.daji.pojo;

/**
 * 现病例
 */
public class Now {
    private Integer autoId;//主键，自增
    private String mid;//受检人编号(外)
    private Integer nid;//nowtype现病史分类表(外)
    private Integer sex;//1：男2：女
    private String elseDisease;//其他疾病

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

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getElseDisease() {
        return elseDisease;
    }

    public void setElseDisease(String elseDisease) {
        this.elseDisease = elseDisease;
    }

    @Override
    public String toString() {
        return "Now{" +
                "autoId=" + autoId +
                ", mid='" + mid + '\'' +
                ", nid=" + nid +
                ", sex=" + sex +
                ", elseDisease='" + elseDisease + '\'' +
                '}';
    }
}
