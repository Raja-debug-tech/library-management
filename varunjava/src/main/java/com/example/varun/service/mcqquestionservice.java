package com.example.varun.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.varun.dto.Quizdto;
import com.example.varun.dto.mcqstudentdto;
import com.example.varun.dto.studentanalysisdto;
import com.example.varun.model.groupmodel;
import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.mcqquestionrepository;

@Service
public class mcqquestionservice {

	private final mcqquestionrepository mcqRepo;

	public mcqquestionservice(mcqquestionrepository mcqRepo) {
		this.mcqRepo = mcqRepo;
	}

	public ResponseEntity<?> saveMcqQuestion(List<Quizdto> quiz, long grpid) {

		groupmodel gm = new groupmodel();
		gm.setGroupId(grpid);

		for (int i = 0; i < quiz.size(); i++) {

			mcqquestionmodel mcq1 = new mcqquestionmodel();

			mcq1.setGroup(gm);
			mcq1.setQuestion(quiz.get(i).getQuestion());
			mcq1.setOptionA(quiz.get(i).getOptionA());
			mcq1.setOptionB(quiz.get(i).getOptionB());
			mcq1.setOptionC(quiz.get(i).getOptionC());
			mcq1.setOptionD(quiz.get(i).getOptionD());
			mcq1.setCorrectOption(quiz.get(i).getCorrectOption());

			mcqRepo.save(mcq1);
		}

		return ResponseEntity.status(200).body("Questions Stored in Database");
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

	public List<mcqstudentdto> getQuestionsForStudent(Long studentId, Long groupId) {
		// TODO: Your existing logic here
		return null;
	}

	// STUDENT ANALYSIS METHOD
	public studentanalysisdto getMyMcqAnalysis(String loggedEmail, Long groupId) {
		// TODO: you will implement analysis logic later
		return null;
	}
}