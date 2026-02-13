package com.example.varun.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "group_students")
public class groupstudentmodel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public groupmodel getGroup() {
		return group;
	}

	public void setGroup(groupmodel group) {
		this.group = group;
	}

	public addstudentmodel getStudent() {
		return student;
	}

	public void setStudent(addstudentmodel student) {
		this.student = student;
	}

	@ManyToOne
	private groupmodel group;

	@ManyToOne
	private addstudentmodel student;

}
