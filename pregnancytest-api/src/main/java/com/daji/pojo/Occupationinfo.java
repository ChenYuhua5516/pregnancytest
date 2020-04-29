package com.daji.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 职业表
 */
public class Occupationinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer oid;//自增
    private String occupation;//职业名称

    public Integer getOid() {
        return oid;
    }

    public void setOid(Integer oid) {
        this.oid = oid;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    @Override
    public String toString() {
        return "Occupationinfo{" +
                "oid=" + oid +
                ", occupation='" + occupation + '\'' +
                '}';
    }
}
