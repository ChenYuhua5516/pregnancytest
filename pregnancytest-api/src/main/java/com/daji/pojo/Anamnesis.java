package com.daji.pojo;

/**
 * 既往病例
 */
public class Anamnesis {
    private Integer autoId;//主键，自增
    private String mid;//受检人编号(外)
    private Integer aid;//anamnesistype既往病例表中有的id（外）
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

    public Integer getAid() {
        return aid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
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
        return "Anamnesis{" +
                "autoId=" + autoId +
                ", mid='" + mid + '\'' +
                ", aid=" + aid +
                ", sex=" + sex +
                ", elseDisease='" + elseDisease + '\'' +
                '}';
    }
}
