package com.daji.pojo;

/**
 * 职业表
 */
public class Occupationinfo {
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
