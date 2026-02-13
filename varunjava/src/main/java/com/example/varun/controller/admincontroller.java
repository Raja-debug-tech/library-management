package com.example.varun.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.groupmodel;
import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.grouprepository;
import com.example.varun.repository.mcqquestionrepository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/admin")
public class admincontroller {

	@Autowired
	private mcqquestionrepository questionRepo;

	@Autowired
	private grouprepository groupRepo;

	@PostMapping("/add-question/{groupName}")
	public String addQuestion(@PathVariable long groupId, @RequestBody mcqquestionmodel q) {

		Optional<groupmodel> grp = groupRepo.findById(groupId);
		if (grp.isPresent()) {

		}
//		groupmodel group = groupRepo.findByGroupName(groupName);
//		if (group == null) {
//			group = new groupmodel();
//			group.setGroupName(groupName);
//			group = groupRepo.save(group);
//		}
//
//		q.setGroup(group);
//		questionRepo.save(q);

		return "Question added successfully";
	}

}
