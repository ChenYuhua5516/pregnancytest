package com.daji.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 户口表
 */
public class Registeredinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rid;//主键，自增
    private String registered;//户口名称

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public String getRegistered() {
        return registered;
    }

    public void setRegistered(String registered) {
        this.registered = registered;
    }

    @Override
    public String toString() {
        return "Registeredinfo{" +
                "rid=" + rid +
                ", registered='" + registered + '\'' +
                '}';
    }
}
