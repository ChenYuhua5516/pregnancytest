package com.daji.pojo;

/**
 * projecttype婚检项目分类
 *
 */
public class Projecttype {
    private Integer typeid;
    private String typename;//分类名称  如：常规扩展项目


    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public String getTypename() {
        return typename;
    }

    public void setTypename(String typename) {
        this.typename = typename;
    }
}
