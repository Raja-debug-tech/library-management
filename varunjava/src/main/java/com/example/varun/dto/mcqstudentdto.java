package com.example.varun.dto;

import java.time.LocalDateTime;

public class mcqstudentdto {

	private Long id;
	private String question;
	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;
	private int timeLimitSeconds;
	private LocalDateTime postDate;

	public mcqstudentdto() {
	}

	public mcqstudentdto(Long id, String question, String optionA, String optionB, String optionC, String optionD,
			int timeLimitSeconds, LocalDateTime postDate) {
		this.id = id;
		this.question = question;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.timeLimitSeconds = timeLimitSeconds;
		this.postDate = postDate;
	}

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
}
