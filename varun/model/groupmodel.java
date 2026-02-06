package com.example.varun.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student_groups")
public class groupmodel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long groupId;

	@Column(unique = true, name = "group_name")

	private String groupName;

	@Column(name = "grpdesc")
	private String grpdesc;

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getGrpdesc() {
		return grpdesc;
	}

	public void setGrpdesc(String grpdesc) {
		this.grpdesc = grpdesc;
	}

}
