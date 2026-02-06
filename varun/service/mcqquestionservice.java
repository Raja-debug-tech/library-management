package com.example.varun.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.mcqquestionrepository;

@Service
public class mcqquestionservice {

	private final mcqquestionrepository mcqRepo;

	public mcqquestionservice(mcqquestionrepository mcqRepo) {
		this.mcqRepo = mcqRepo;
	}

	public mcqquestionmodel saveMcqQuestion(mcqquestionmodel mcq) {
		return mcqRepo.save(mcq);
	}

	public List<mcqquestionmodel> getMcqQuestionsByGroupId(Long groupId) {
		return mcqRepo.findByGroup_GroupId(groupId);
	}

	public List<mcqquestionmodel> getAllMcqQuestions() {
		return mcqRepo.findAll();
	}

	public void deleteMcqQuestion(Long id) {
		mcqRepo.deleteById(id);
	}
}
