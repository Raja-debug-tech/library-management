package com.example.varun.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.mcqquestionmodel;
import com.example.varun.service.mcqquestionservice;
import com.example.varun.service.questionhistoryservice;

@RestController
@RequestMapping("/api/mcq")
@CrossOrigin(origins = "*")
public class mcqquestioncontroller {

	private final mcqquestionservice mcqService;
	private final questionhistoryservice historyService;

	public mcqquestioncontroller(mcqquestionservice mcqService, questionhistoryservice historyService) {
		this.mcqService = mcqService;
		this.historyService = historyService;
	}

	// ✅ Admin post question
	@PostMapping("/add/{grpid}")
	public mcqquestionmodel addMcq(@RequestBody List<Quizdto> mcq, @PathVariable int grpid) {

		mcqquestionmodel saved = mcqService.saveMcqQuestion(mcq, grpid);

		historyService.saveMcqQuestionHistory(saved);

		return saved;
	}

	@GetMapping("/group/{groupId}")
	public List<mcqquestionmodel> getMcqsByGroup(@PathVariable Long groupId) {
		return mcqService.getMcqQuestionsByGroupId(groupId);
	}

	@GetMapping("/all")
	public List<mcqquestionmodel> getAllMcqs() {
		return mcqService.getAllMcqQuestions();
	}

	@DeleteMapping("/{id}")
	public String deleteMcq(@PathVariable Long id) {
		mcqService.deleteMcqQuestion(id);
		return "MCQ question deleted successfully";
	}
}
