package com.daji.pojo;

/**
 * 现病例分类
 */
public class Nowtype {
    private Integer nid;//主键自增
    private String typename;//病名称

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public String getTypename() {
        return typename;
    }

    public void setTypename(String typename) {
        this.typename = typename;
    }

    @Override
    public String toString() {
        return "Nowtype{" +
                "nid=" + nid +
                ", typename='" + typename + '\'' +
                '}';
    }
}
