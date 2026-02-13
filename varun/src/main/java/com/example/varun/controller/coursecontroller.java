package com.example.varun.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.repository.courserepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/dropdowns")
public class coursecontroller {

	@Autowired
	private courserepository courseRepo;

	private final List<String> defaultCourses = new ArrayList<>(
			List.of("BCA", "BSC", "B.B.A", "B.COM", "B.COM P.A", "B.COM A&F", "B.A CRIMINOLGY"));

//	@PostMapping("/add-course")
//	public String addCourse(@RequestBody Map<String, String> payload) {
//		String name = payload.get("name");
//		if (name == null || name.trim().isEmpty())
//			return "Invalid course input.";
//
//		String formatted = name.trim().toUpperCase();
//		if (!courseRepo.existsByNameIgnoreCase(formatted)) {
//			com.example.varun.model.coursemodel course = new com.example.varun.model.coursemodel();
//			course.setName(formatted);
//			courseRepo.save(course);
//			return "Course added: " + formatted;
//		}
//		return "Course already exists.";
//	}
}