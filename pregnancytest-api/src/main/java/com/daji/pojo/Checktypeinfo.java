package com.daji.pojo;

/**
 * 检查类型
 */
public class Checktypeinfo {
    private Integer cid;//主键，自增
    private String checktype;//同意人类型

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getChecktype() {
        return checktype;
    }

    public void setChecktype(String checktype) {
        this.checktype = checktype;
    }

    @Override
    public String toString() {
        return "Checktypeinfo{" +
                "cid=" + cid +
                ", checktype='" + checktype + '\'' +
                '}';
    }
}
