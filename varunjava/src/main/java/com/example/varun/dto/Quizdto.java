package com.example.varun.dto;

public class Quizdto {

	private String question;

	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;
	private String correctOption;

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOptiona() {
		return optionA;
	}

	public void setOptiona(String optiona) {
		this.optionA = optiona;
	}

	public String getOptionb() {
		return optionB;
	}

	public void setOptionb(String optionb) {
		this.optionB = optionb;
	}

	public String getOptionc() {
		return optionC;
	}

	public void setOptionc(String optionc) {
		this.optionC = optionc;
	}

	public String getOptiond() {
		return optionD;
	}

	public void setOptiond(String optiond) {
		this.optionD = optiond;
	}

	public String getCrtanswer() {
		return correctOption;
	}

	public void setCrtanswer(String crtanswer) {
		this.correctOption = crtanswer;
	}

}
