package com.example.varun.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.groupmodel;
import com.example.varun.model.groupstudentmodel;
import com.example.varun.repository.addstudentrepository;
import com.example.varun.repository.grouprepository;
import com.example.varun.repository.groupstudentrepository;

@Service
public class groupservice {

	private final grouprepository groupRepository;
	private final addstudentrepository studentRepository;
	private final groupstudentrepository groupStudentRepository;

	public groupservice(grouprepository groupRepository, addstudentrepository studentRepository,
			groupstudentrepository groupStudentRepository) {
		this.groupRepository = groupRepository;
		this.studentRepository = studentRepository;
		this.groupStudentRepository = groupStudentRepository;
	}

	public List<addstudentmodel> getStudentsInGroup(Long groupId) {
		return groupStudentRepository.findStudentsByGroupId(groupId);
	}

	public List<addstudentmodel> getAllStudents() {
		return studentRepository.findAll();
	}

	public String addStudentToGroup(Long groupId, Long studentId) {

		groupmodel group = groupRepository.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));

		addstudentmodel student = studentRepository.findById(studentId)
				.orElseThrow(() -> new RuntimeException("Student not found"));

		boolean exists = groupStudentRepository.existsByGroupAndStudent(group, student);

		if (exists) {
			return "Student already exists in this group";
		}

		return "Student added to group successfully";
	}

	// ✅ NEW DELETE LOGIC
	public String removeStudentFromGroup(Long groupId, Long studentId) {

		groupmodel group = groupRepository.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));

		addstudentmodel student = studentRepository.findById(studentId)
				.orElseThrow(() -> new RuntimeException("Student not found"));

		groupstudentmodel mapping = groupStudentRepository.findByGroupAndStudent(group, student)
				.orElseThrow(() -> new RuntimeException("Student is not present in this group"));

		groupStudentRepository.delete(mapping);

		// After deleting mapping, student is automatically "not assigned to any group"
		return "Student removed from group successfully";
	}

	public List<addstudentmodel> studentnotingroup() {
		return studentRepository.nonassigned();
	}

	public ResponseEntity<?> createGroup(String groupname, String grpdesc) {
		groupmodel gp = new groupmodel();
		gp.setGroupName(groupname);
		gp.setGrpdesc(grpdesc);
		groupRepository.save(gp);
		return ResponseEntity.status(200).body("Group Created Successfully");
	}

	public List<groupmodel> getGroups() {
		return groupRepository.findAll();
	}
}
