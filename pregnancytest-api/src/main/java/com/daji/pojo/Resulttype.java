package com.daji.pojo;

import javax.persistence.Id;

/**
 * resulttype结果建议表
 *
 */
public class Resulttype {
    @Id
    private Integer sid;
    private String suggest;//建议
    private boolean newsid;

    public boolean isNewsid() {
        return newsid;
    }

    public void setNewsid(boolean newsid) {
        this.newsid = newsid;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getSuggest() {
        return suggest;
    }

    public void setSuggest(String suggest) {
        this.suggest = suggest;
    }
}
