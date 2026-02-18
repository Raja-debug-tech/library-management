package com.example.varun.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.dto.groupwisehistorydto;
import com.example.varun.service.questionhistoryservice;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "*")
public class questionhistorycontroller {

	private final questionhistoryservice historyService;

	public questionhistorycontroller(questionhistoryservice historyService) {
		this.historyService = historyService;
	}

	// This will return daywise questions
	@GetMapping("/group/{groupId}")
	public List<groupwisehistorydto> getGroupWiseDayWiseHistory(@PathVariable Long groupId) {
		return historyService.getGroupDayWiseHistory(groupId);
	}
}
