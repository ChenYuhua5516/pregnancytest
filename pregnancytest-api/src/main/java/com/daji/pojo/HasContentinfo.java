package com.daji.pojo;

/**
 * 知情同意书
 */
public class HasContentinfo {
    private Integer hid;//主键，自增
    private String hasContentinfo;//知情同意书

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public String getHasContentinfo() {
        return hasContentinfo;
    }

    public void setHasContentinfo(String hasContentinfo) {
        this.hasContentinfo = hasContentinfo;
    }

    @Override
    public String toString() {
        return "HasContentinfo{" +
                "hid=" + hid +
                ", hasContentinfo='" + hasContentinfo + '\'' +
                '}';
    }
}
