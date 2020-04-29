package com.daji.pojo;

import javax.persistence.Id;

public class Hascontentinfo {
    @Id
    private Integer hid;
    private String hascontentinfo;

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public String getHascontentinfo() {
        return hascontentinfo;
    }

    public void setHascontentinfo(String hascontentinfo) {
        this.hascontentinfo = hascontentinfo;
    }
}
