package com.example.varun.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "mcq_questions")
public class mcqquestionmodel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String question;

	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;

	@JsonIgnore
	private String correctOption;

	private int timeLimitSeconds = 30;

	private LocalDateTime postDate = LocalDateTime.now();

	@ManyToOne
	private groupmodel group;

	// getters only (safe)
	public Long getId() {
		return id;
	}

	public String getQuestion() {
		return question;
	}

	public String getOptionA() {
		return optionA;
	}

	public String getOptionB() {
		return optionB;
	}

	public String getOptionC() {
		return optionC;
	}

	public String getOptionD() {
		return optionD;
	}

	public int getTimeLimitSeconds() {
		return timeLimitSeconds;
	}

	public LocalDateTime getPostDate() {
		return postDate;
	}

	public groupmodel getGroup() {
		return group;
	}
}
