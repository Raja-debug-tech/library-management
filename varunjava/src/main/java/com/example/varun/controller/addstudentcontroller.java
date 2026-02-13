package com.example.varun.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.addstudentmodel;
import com.example.varun.repository.addstudentrepository;
import com.example.varun.service.addstudentservice;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class addstudentcontroller {

	@Autowired
	private addstudentservice studentService;

	@Autowired
	private addstudentrepository addstdrepo;

//	@PostMapping("/addstd")
//	public ResponseEntity<?> addStd(@RequestBody addstudentmodel student) {
//		System.out.println("DOB" + student.getDob());
//		addstdrepo.save(student);
//		return ResponseEntity.status(200).body("succesfully saved");
//	}
	@PostMapping("/add")
	public ResponseEntity<addstudentmodel> addStudent(@RequestBody addstudentmodel student) {
		addstudentmodel savedStudent = studentService.addStudent(student);

		return ResponseEntity.ok(savedStudent);
	}
}