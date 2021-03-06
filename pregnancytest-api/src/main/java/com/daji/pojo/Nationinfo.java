package com.daji.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 民族表
 */
public class Nationinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer nid;//主键，自增
    private String nation;//民族名称

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    @Override
    public String toString() {
        return "Nationinfo{" +
                "nid=" + nid +
                ", nation='" + nation + '\'' +
                '}';
    }
}
