package com.example.varun.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.mcqquestionrepository;

@RestController
@RequestMapping("/api/student")
public class studentcontroller {

	@Autowired
	private mcqquestionrepository questionRepo;

	@GetMapping("/questions/{groupId}")
	public List<mcqquestionmodel> getQuestions(@PathVariable Long groupId) {
		return questionRepo.findByGroup_GroupId(groupId);
	}

}
