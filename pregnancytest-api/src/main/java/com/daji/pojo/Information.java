package com.daji.pojo;

import javax.persistence.Column;
import javax.persistence.Id;

/**
 * 受检人证件信息
 */
public class Information {
    @Id
    @Column(name = "`mid`")
    private String mid;//受检人编号 日期 + 5位流水号
    private String midcard;//男方身份证号
    private String fidcard;//女方身份证号
    private String mimg;//男方证件照
    private String fimg;//女方证件照
    private Integer mnationality;//男民族(民族表外键)
    private Integer fnationality;//女民族(民族表外键)
    private Integer hirpid;//男方证件类型（外）
    private Integer herpid;//女方证件类型（外）

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public String getMidcard() {
        return midcard;
    }

    public void setMidcard(String midcard) {
        this.midcard = midcard;
    }

    public String getFidcard() {
        return fidcard;
    }

    public void setFidcard(String fidcard) {
        this.fidcard = fidcard;
    }

    public String getMimg() {
        return mimg;
    }

    public void setMimg(String mimg) {
        this.mimg = mimg;
    }

    public String getFimg() {
        return fimg;
    }

    public void setFimg(String fimg) {
        this.fimg = fimg;
    }

    public Integer getMnationality() {
        return mnationality;
    }

    public void setMnationality(Integer mnationality) {
        this.mnationality = mnationality;
    }

    public Integer getFnationality() {
        return fnationality;
    }

    public void setFnationality(Integer fnationality) {
        this.fnationality = fnationality;
    }

    public Integer getHirpid() {
        return hirpid;
    }

    public void setHirpid(Integer hirpid) {
        this.hirpid = hirpid;
    }

    public Integer getHerpid() {
        return herpid;
    }

    public void setHerpid(Integer herpid) {
        this.herpid = herpid;
    }


}
