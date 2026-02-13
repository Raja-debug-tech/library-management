package com.example.varun.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "mcq_attendance", uniqueConstraints = @UniqueConstraint(columnNames = { "student_id", "question_id" }))
public class mcqattendmodel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "student_id")
	private addstudentmodel student;

	@ManyToOne
	@JoinColumn(name = "question_id")
	private mcqquestionmodel question;

	private boolean attended;

	private LocalDateTime submitTime;

	private String result;

	public addstudentmodel getStudent() {
		return student;
	}

	public mcqquestionmodel getQuestion() {
		return question;
	}

	public LocalDateTime getSubmitTime() {
		return submitTime;
	}

	public String getResult() {
		return result;
	}
}
