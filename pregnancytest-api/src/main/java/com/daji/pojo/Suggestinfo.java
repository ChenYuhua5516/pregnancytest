package com.daji.pojo;

import javax.persistence.*;

/**
 * suggestinfo最终结果表
 *
 */
@Table(name = "suggestinfo")
public class Suggestinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;
    @Column(name = "`mid`")
    private  String mid;//受检人编号(外)

    private  Integer sid;//resulttype结果建议表中有的id

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

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }
}
