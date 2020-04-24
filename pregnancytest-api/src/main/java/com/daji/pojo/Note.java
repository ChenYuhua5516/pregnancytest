package com.daji.pojo;

/**
 * note短信表
 */
public class Note {
    private Integer autoId;
    private String mid;//受检人编号(外)女

    private String message;//note短信信息

    private Integer whether;//是否发送成功 1：是 2：否

    private Integer source;//短信来源：1：医生发给受检人 2：受检人回复医生


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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getWhether() {
        return whether;
    }

    public void setWhether(Integer whether) {
        this.whether = whether;
    }

    public Integer getSource() {
        return source;
    }

    public void setSource(Integer source) {
        this.source = source;
    }
}
