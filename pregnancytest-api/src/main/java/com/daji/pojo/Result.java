package com.daji.pojo;
/**
 * �����
 *
 */

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Table(name = "result")
public class Result {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer autoid;//��������
	@Column(name = "`check`")
	private Integer check;//������ 1��������� 2�������쳣���
	private String abnormal;//�쳣��Ϣ
	private String disease;//�߲����
	private Integer instruction;//�Ƿ����ָ�����
	private String replenish;//����ҽ�����䲡ʷ
	private Integer advice;//��齨�� 1:����Ҫ  2����Ժ��һ�����  
	private String inspectionitem;// ��������Ŀ
	private Integer manner;//�Խ�һ����齨���̬��1������ 2���ܾ�
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date returndate;//	ԤԼ��������
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date creaedata;// �������
	@Column(name = "`mid`")
	private String mid;//�ܼ��˱��(��)
	private Integer sex;//1����2��Ů 

	public Integer getAutoid() {
		return autoid;
	}

	public void setAutoid(Integer autoid) {
		this.autoid = autoid;
	}

	public Integer getCheck() {
		return check;
	}
	public void setCheck(Integer check) {
		this.check = check;
	}
	public String getAbnormal() {
		return abnormal;
	}
	public void setAbnormal(String abnormal) {
		this.abnormal = abnormal;
	}
	public String getDisease() {
		return disease;
	}
	public void setDisease(String disease) {
		this.disease = disease;
	}
	public Integer getInstruction() {
		return instruction;
	}
	public void setInstruction(Integer instruction) {
		this.instruction = instruction;
	}
	public String getReplenish() {
		return replenish;
	}
	public void setReplenish(String replenish) {
		this.replenish = replenish;
	}
	public Integer getAdvice() {
		return advice;
	}
	public void setAdvice(Integer advice) {
		this.advice = advice;
	}
	public String getInspectionitem() {
		return inspectionitem;
	}
	public void setInspectionitem(String inspectionitem) {
		this.inspectionitem = inspectionitem;
	}
	public Integer getManner() {
		return manner;
	}
	public void setManner(Integer manner) {
		this.manner = manner;
	}
	public Date getReturndate() {
		return returndate;
	}
	public void setReturndate(Date returndate) {
		this.returndate = returndate;
	}
	public Date getCreaedata() {
		return creaedata;
	}
	public void setCreaedata(Date creaedata) {
		this.creaedata = creaedata;
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
		return "Result [autoId=" + autoid + ", check=" + check + ", abnormal=" + abnormal + ", disease=" + disease
				+ ", instruction=" + instruction + ", replenish=" + replenish + ", advice=" + advice
				+ ", inspectionitem=" + inspectionitem + ", manner=" + manner + ", returndate=" + returndate
				+ ", creaedata=" + creaedata + ", mid=" + mid + ", sex=" + sex + "]";
	}
	
}
