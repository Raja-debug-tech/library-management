package com.example.varun.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.questionhistorymodel;
import com.example.varun.service.questionhistoryservice;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "*")
public class questionhistorycontroller {

	private final questionhistoryservice historyService;

	public questionhistorycontroller(questionhistoryservice historyService) {
		this.historyService = historyService;
	}

	@GetMapping("/questions")
	public List<questionhistorymodel> getPostedQuestionHistory() {
		return historyService.getQuestionHistory();
	}
}
