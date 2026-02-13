package com.example.varun.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.groupstudentmodel;
import com.example.varun.repository.addstudentrepository;
import com.example.varun.repository.groupstudentrepository;
import com.example.varun.repository.mcqattendancerepository;
import com.example.varun.repository.mcqquestionrepository;

@RestController
@RequestMapping("/api/admin/student-analysis")
@CrossOrigin(origins = "*")
public class adminstudentanalysiscontroller {

	private final addstudentrepository studentRepo;
	private final groupstudentrepository groupStudentRepo;
	private final mcqquestionrepository questionRepo;
	private final mcqattendancerepository attendanceRepo;

	public adminstudentanalysiscontroller(addstudentrepository studentRepo, groupstudentrepository groupStudentRepo,
			mcqquestionrepository questionRepo, mcqattendancerepository attendanceRepo) {

		this.studentRepo = studentRepo;
		this.groupStudentRepo = groupStudentRepo;
		this.questionRepo = questionRepo;
		this.attendanceRepo = attendanceRepo;
	}

	/**
	 * Examples: /api/admin/student-analysis?name=Raja
	 * /api/admin/student-analysis?phone=9876543210
	 */
	@GetMapping
	public Map<String, Object> getStudentAnalysis(@RequestParam(required = false) String name,
			@RequestParam(required = false) String phone) {

		// 🔍 Step 1: Find student
		Optional<addstudentmodel> studentOpt;

		if (name != null && !name.isEmpty()) {
			studentOpt = studentRepo.findByNameIgnoreCase(name);
		} else if (phone != null && !phone.isEmpty()) {
			studentOpt = studentRepo.findByMobileNo(phone);
		} else {
			throw new RuntimeException("Name or Phone number is required");
		}

		addstudentmodel student = studentOpt.orElseThrow(() -> new RuntimeException("Student not found"));

		// 🔍 Step 2: Find student's group
		groupstudentmodel groupStudent = groupStudentRepo.findByStudent(student)
				.orElseThrow(() -> new RuntimeException("Student is not assigned to any group"));

		Long groupId = groupStudent.getGroup().getGroupId();

		// 📘 Step 3: Total MCQs for the group
		long totalQuestions = questionRepo.findByGroup_GroupId(groupId).size();

		// 📝 Step 4: Attended MCQs (FIXED)
		long attendedQuestions = attendanceRepo.countByStudentAndAttendedTrue(student);

		// ❌ Step 5: Not attended
		long notAttendedQuestions = totalQuestions - attendedQuestions;

		// 📊 Step 6: Percentages
		double attendancePercentage = totalQuestions == 0 ? 0 : (attendedQuestions * 100.0) / totalQuestions;

		double notAttendedPercentage = totalQuestions == 0 ? 0 : (notAttendedQuestions * 100.0) / totalQuestions;

		// 📦 Step 7: Response (NO DTO)
		Map<String, Object> response = new HashMap<>();

		response.put("studentId", student.getId());
		response.put("studentName", student.getName());
		response.put("mobileNo", student.getMobileNo());

		response.put("groupId", groupId);
		response.put("totalQuestions", totalQuestions);
		response.put("attendedQuestions", attendedQuestions);
		response.put("notAttendedQuestions", notAttendedQuestions);

		response.put("attendancePercentage", attendancePercentage);
		response.put("notAttendedPercentage", notAttendedPercentage);

		return response;
	}
}
