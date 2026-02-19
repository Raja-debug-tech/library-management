package com.example.varun.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "group_check")
public class Group_check {

	@Id
	@Column(name = "GCID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int gcid;
	@Column(name = "STUDENT_ID")
	private Long student_id;
	@Column(name = "GROUP_ID")
	private Long group_id;

	public int getGcid() {
		return gcid;
	}

	public void setGcid(int gcid) {
		this.gcid = gcid;
	}

	public long getStudent_id() {
		return student_id;
	}

	public void setStudent_id(long student_id) {
		this.student_id = student_id;
	}

	public Long getGroup_id() {
		return group_id;
	}

	public void setGroup_id(Long group_id) {
		this.group_id = group_id;
	}

}
