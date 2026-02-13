package com.example.varun.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.varun.dto.Quizdto;
import com.example.varun.dto.mcqstudentdto;
import com.example.varun.model.groupmodel;
import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.mcqquestionrepository;

@Service
public class mcqquestionservice {

	private final mcqquestionrepository mcqRepo;

	public mcqquestionservice(mcqquestionrepository mcqRepo) {
		this.mcqRepo = mcqRepo;
	}

	public mcqquestionmodel saveMcqQuestion(List<Quizdto> quiz, long grpid) {
		mcqquestionmodel mcq = new mcqquestionmodel();
		groupmodel gm = new groupmodel();
		for (int i = 0; i < quiz.size() - 1; i++) {

			gm.setGroupId(grpid);
			mcq.setGroup(gm);

			mcq.setQuestion(quiz.get(i).getQuestion());
			mcq.setOptionA(quiz.get(i).getOptiona());
			mcq.setOptionB(quiz.get(i).getOptionb());
			mcq.setOptionC(quiz.get(i).getOptionc());
			mcq.setOptionD(quiz.get(i).getOptiond());
			mcq.setCorrectOption(quiz.get(i).getCrtanswer());
		}
//		mcq.setPostDate(mcq.getPostDate().now());

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

	public List<mcqstudentdto> getQuestionsForStudent(Long studentId, Long groupId) {
		// TODO Auto-generated method stub
		return null;
	}

}
