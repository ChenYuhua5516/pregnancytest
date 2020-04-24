package com.daji.pojo;

/**
 * suggestinfo最终结果表
 *
 */
public class Suggestinfo {
    private Integer autoId;
    private  String mid;//受检人编号(外)

    private  Integer sid;//resulttype结果建议表中有的id

    private Integer sex;//1：男2：女


    public Integer getAutoId() {
        return autoId;
    }

    public void setAutoId(Integer autoId) {
        this.autoId = autoId;
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
