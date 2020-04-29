package com.daji.pojo;

import javax.persistence.Id;
import java.util.Date;

/**
 * 用户
 */
public class User {
    @Id
    private Integer uid;//主键
    private String uname;//用户名
    private String upwd;//用户密码
    private Date createdate;//创建时间

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getUpwd() {
        return upwd;
    }

    public void setUpwd(String upwd) {
        this.upwd = upwd;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid=" + uid +
                ", uname='" + uname + '\'' +
                ", upwd='" + upwd + '\'' +
                ", createdate=" + createdate +
                '}';
    }
}
