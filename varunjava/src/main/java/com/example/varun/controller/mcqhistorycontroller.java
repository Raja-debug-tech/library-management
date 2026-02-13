package com.example.varun.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.service.mcqhistoryservice;

@RestController
@RequestMapping("/api/admin/history")
@CrossOrigin(origins = "*")
public class mcqhistorycontroller {

	private final mcqhistoryservice historyService;

	public mcqhistorycontroller(mcqhistoryservice historyService) {
		this.historyService = historyService;
	}

	@GetMapping("/mcq")
	public List<Map<String, Object>> getMcqHistory() {
		return historyService.getMcqHistory();
	}
}
