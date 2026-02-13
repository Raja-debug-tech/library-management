package com.example.varun.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.varun.dto.mcqstudentdto;
import com.example.varun.model.mcqquestionmodel;
import com.example.varun.model.studenttestmodel;
import com.example.varun.repository.mcqquestionrepository;
import com.example.varun.repository.studenttestrepository;

@Service
public class studenttestservice {

	private final mcqquestionrepository mcqRepo;
	private final studenttestrepository mapRepo;

	public studenttestservice(mcqquestionrepository mcqRepo, studenttestrepository mapRepo) {
		this.mcqRepo = mcqRepo;
		this.mapRepo = mapRepo;
	}

	// Admin saves question
	public mcqquestionmodel saveMcqQuestion(mcqquestionmodel mcq) {
		return mcqRepo.save(mcq);
	}

	// Admin view group questions
	public List<mcqquestionmodel> getMcqQuestionsByGroupId(Long groupId) {
		return mcqRepo.findByGroup_GroupId(groupId);
	}

	public List<mcqquestionmodel> getAllMcqQuestions() {
		return mcqRepo.findAll();
	}

	public void deleteMcqQuestion(Long id) {
		mcqRepo.deleteById(id);
	}

	// ✅ Student side: assign shuffled questions (fixed order per student)
	public List<mcqstudentdto> getQuestionsForStudent(Long studentId, Long groupId) {

		// 1) If mapping already exists -> return same order
		if (mapRepo.existsByStudentIdAndGroupId(studentId, groupId)) {

			List<studenttestmodel> maps = mapRepo.findByStudentIdAndGroupIdOrderByQuestionOrderAsc(studentId, groupId);

			List<Long> questionIds = maps.stream().map(studenttestmodel::getQuestionId).collect(Collectors.toList());

			// fetch all questions
			List<mcqquestionmodel> questions = mcqRepo.findAllById(questionIds);

			// convert to map for fast lookup
			Map<Long, mcqquestionmodel> questionMap = questions.stream()
					.collect(Collectors.toMap(mcqquestionmodel::getId, q -> q));

			// return in correct order
			List<mcqstudentdto> result = new ArrayList<>();
			for (studenttestmodel m : maps) {
				mcqquestionmodel q = questionMap.get(m.getQuestionId());
				if (q != null) {
					result.add(toStudentDto1(q));
				}
			}
			return result;
		}

		// 2) No mapping exists -> assign new shuffled order
		List<mcqquestionmodel> groupQuestions = mcqRepo.findByGroup_GroupId(groupId);

		if (groupQuestions == null || groupQuestions.isEmpty()) {
			return Collections.emptyList();
		}

		Collections.shuffle(groupQuestions); // 🔥 each student gets different order

		// save mapping
		int order = 1;
		for (mcqquestionmodel q : groupQuestions) {
			studenttestmodel map = new studenttestmodel();
			map.setStudentId(studentId);
			map.setGroupId(groupId);
			map.setQuestionId(q.getId());
			map.setQuestionOrder(order++);
			mapRepo.save(map);
		}

		// return shuffled list
		return groupQuestions.stream().map(this::toStudentDto1).collect(Collectors.toList());
	}

	private mcqstudentdto toStudentDto1(mcqquestionmodel q) {
		// TODO Auto-generated method stub
		return null;
	}

	private mcqstudentdto toStudentDto(mcqquestionmodel q) {
		return new mcqstudentdto(q.getId(), q.getQuestion(), q.getOptionA(), q.getOptionB(), q.getOptionC(),
				q.getOptionD(), q.getTimeLimitSeconds(), q.getPostDate());
	}
}
