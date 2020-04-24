package com.daji.pojo;

/**
 * 既往病例分类
 */
public class Anamnesistype {
    private Integer aid;//主键自增
    private String typename;//病名称

    public Integer getAid() {
        return aid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
    }

    public String getTypename() {
        return typename;
    }

    public void setTypename(String typename) {
        this.typename = typename;
    }

    @Override
    public String toString() {
        return "Anamnesistype{" +
                "aid=" + aid +
                ", typename='" + typename + '\'' +
                '}';
    }
}
