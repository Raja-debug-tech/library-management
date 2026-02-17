package com.example.varun.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.groupmodel;
import com.example.varun.service.groupservice;

@RestController
@RequestMapping("/api/groups")
@CrossOrigin("*")
public class groupcontroller {

	private final groupservice groupService;

	public groupcontroller(groupservice groupService) {
		this.groupService = groupService;
	}

	@GetMapping("/getstudents/{groupId}")
	public List<addstudentmodel> getStudentsInGroup(@PathVariable Long groupId) {
		return groupService.getStudentsInGroup(groupId);
	}

	@GetMapping("/all-students")
	public List<addstudentmodel> getAllStudents() {
		return groupService.getAllStudents();
	}

	@PostMapping("/{groupId}/add-student/{studentId}")
	public String addStudentToGroup(@PathVariable Long groupId, @PathVariable Long studentId) {
		return groupService.addStudentToGroup(groupId, studentId);
	}

	@GetMapping("/nongrpstdnt")

	public List<addstudentmodel> nonassignedstudent() {
		return groupService.studentnotingroup();

	}

	@PostMapping("/creategroup")
	public ResponseEntity<?> creategrp(@RequestParam String groupname, @RequestParam String groupdesc) {
		return groupService.createGroup(groupname, groupdesc);
	}

	@GetMapping("/getgroup")
	public List<groupmodel> getGroup() {
		return groupService.getGroups();
	}
}
