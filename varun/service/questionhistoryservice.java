package com.example.varun.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.varun.model.mcqquestionmodel;
import com.example.varun.model.questionhistorymodel;
import com.example.varun.repository.questionhistoryrepository;

@Service
public class questionhistoryservice {

	private final questionhistoryrepository historyRepo;

	public questionhistoryservice(questionhistoryrepository historyRepo) {
		this.historyRepo = historyRepo;
	}

	public void saveMcqQuestionHistory(mcqquestionmodel mcq) {

		questionhistorymodel history = new questionhistorymodel();

		history.setQuestionTitle(mcq.getQuestion());

		history.setQuestionDescription(
				mcq.getOptionA() + ", " + mcq.getOptionB() + ", " + mcq.getOptionC() + ", " + mcq.getOptionD());

		if (mcq.getGroup() != null) {
			history.setGroupName("Group ID : " + mcq.getGroup().getGroupId());
		} else {
			history.setGroupName("No Group Assigned");
		}

		history.setQuestionType("MCQ");
		history.setPostedAt(LocalDateTime.now());

		historyRepo.save(history);
	}

	public List<questionhistorymodel> getQuestionHistory() {
		return historyRepo.findAllByOrderByPostedAtDesc();
	}
}
