package com.daji.pojo;

import javax.persistence.Id;

/**
 * 证件类型
 */
public class Papersinfo {
    @Id
    private Integer pid;//主键，自增
    private String papers;//证件类型

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getPapers() {
        return papers;
    }

    public void setPapers(String papers) {
        this.papers = papers;
    }

    @Override
    public String toString() {
        return "Papersinfo{" +
                "pid=" + pid +
                ", papers='" + papers + '\'' +
                '}';
    }
}
