package com.daji.pojo;

import javax.persistence.*;

/**
 * 婚前医学检查证明男女
 */
@Table(name = "prove")
public class Prove {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;//主键
    @Column(name = "`mid`")
    private String mid;//受检人编号(外)
    private Integer sex;//1：男2：女

    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Prove{" +
                "autoId=" + autoid +
                ", mid='" + mid + '\'' +
                ", sex=" + sex +
                '}';
    }
}
