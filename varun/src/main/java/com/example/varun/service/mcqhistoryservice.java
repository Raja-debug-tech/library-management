package com.example.varun.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.mcqattendmodel;
import com.example.varun.repository.addstudentrepository;
import com.example.varun.repository.mcqattendancerepository;

@Service
public class mcqhistoryservice {

	private final addstudentrepository studentRepo;
	private final mcqattendancerepository attendanceRepo;

	public mcqhistoryservice(addstudentrepository studentRepo, mcqattendancerepository attendanceRepo) {
		this.studentRepo = studentRepo;
		this.attendanceRepo = attendanceRepo;
	}

	public List<Map<String, Object>> getMcqHistory() {

		List<Map<String, Object>> response = new ArrayList<>();
		List<addstudentmodel> students = studentRepo.findAll();

		for (addstudentmodel student : students) {

			Map<String, Object> row = new HashMap<>();

			row.put("name", student.getName());

			row.put("phone", student.getMobileNo());

			Optional<mcqattendmodel> last = attendanceRepo.findTopByStudentOrderBySubmitTimeDesc(student);

			if (last.isPresent()) {

				mcqattendmodel att = last.get();

				row.put("postDate", att.getQuestion().getPostDate());
				row.put("testDate", att.getSubmitTime());
				row.put("lastSubmitTime", att.getSubmitTime());
				row.put("result", att.getResult());

				if (att.getSubmitTime().isBefore(LocalDateTime.now().minusDays(3))) {
					row.put("status", "Inactive");
				} else {
					row.put("status", "Active");
				}

			} else {
				row.put("postDate", null);
				row.put("testDate", null);
				row.put("lastSubmitTime", null);
				row.put("result", "Not Submitted");
				row.put("status", "Inactive");
			}

			response.add(row);
		}

		return response;
	}
}
