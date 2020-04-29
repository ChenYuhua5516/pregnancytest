package com.daji.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * //complete 婚检项目检查完成表
 */
@Table(name = "complete")

public class Complete {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autoid;//
    private Integer typeid;//婚检项目分类id(外)
    @Column(name = "`mid`")
    private String mid;//受检人编号(外)

    private  Integer sex;//1：男2：女

    private String doctorname;//医生名称

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdate;//创建时间

    public Integer getAutoid() {
        return autoid;
    }

    public void setAutoid(Integer autoid) {
        this.autoid = autoid;
    }

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
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

    public String getDoctorname() {
        return doctorname;
    }

    public void setDoctorname(String doctorname) {
        this.doctorname = doctorname;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    @Override
    public String toString() {
        return "Complete{" +
                "autoId=" + autoid +
                ", typeid=" + typeid +
                ", mid='" + mid + '\'' +
                ", sex=" + sex +
                ", doctorname='" + doctorname + '\'' +
                ", createdate=" + createdate +
                '}';
    }
}
