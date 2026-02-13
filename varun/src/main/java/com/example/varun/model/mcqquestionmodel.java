package com.example.varun.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
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
	@Column(name = "optiona")
	private String optionA;
	@Column(name = "optionb")
	private String optionB;
	@Column(name = "optionc")
	private String optionC;
	@Column(name = "optiond")
	private String optionD;

//	@JsonIgnore
	@Column(name = "correct_option")
	private String correctOption;

//	private int timeLimitSeconds = 30;
	@Column(name = "post_date")
	private LocalDateTime postDate = LocalDateTime.now();
//	@Column(name = "group_group_id")

	@ManyToOne
	@JsonIgnore
	private groupmodel group;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOptionA() {
		return optionA;
	}

	public void setOptionA(String optionA) {
		this.optionA = optionA;
	}

	public String getOptionB() {
		return optionB;
	}

	public void setOptionB(String optionB) {
		this.optionB = optionB;
	}

	public String getOptionC() {
		return optionC;
	}

	public void setOptionC(String optionC) {
		this.optionC = optionC;
	}

	public String getOptionD() {
		return optionD;
	}

	public void setOptionD(String optionD) {
		this.optionD = optionD;
	}

	public String getCorrectOption() {
		return correctOption;
	}

	public void setCorrectOption(String correctOption) {
		this.correctOption = correctOption;
	}

	public LocalDateTime getPostDate() {
		return postDate;
	}

	public void setPostDate(LocalDateTime postDate) {
		this.postDate = postDate;
	}

	public groupmodel getGroup() {
		return group;
	}

	public void setGroup(groupmodel group) {
		this.group = group;
	}

	public int getTimeLimitSeconds() {
		// TODO Auto-generated method stub
		return 0;
	}

}
