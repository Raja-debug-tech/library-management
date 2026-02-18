package com.example.varun.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.varun.dto.groupwisehistorydto;
import com.example.varun.dto.groupwisehistorydto.QuestionDTO;
import com.example.varun.model.mcqquestionmodel;
import com.example.varun.repository.mcqquestionrepository;

@Service
public class questionhistoryservice {

	private final mcqquestionrepository mcqRepo;

	public questionhistoryservice(mcqquestionrepository mcqRepo) {
		this.mcqRepo = mcqRepo;
	}

	// ✅ Group wise + day wise questions
	public List<groupwisehistorydto> getGroupDayWiseHistory(Long groupId) {

		List<mcqquestionmodel> questions = mcqRepo.findByGroupIdOrderByPostDateDesc(groupId);

		Map<String, List<QuestionDTO>> groupedByDate = new LinkedHashMap<>();

		DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd MMMM yyyy");
		DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd MMMM yyyy, hh:mm a");

		for (mcqquestionmodel q : questions) {

			LocalDate dateOnly = q.getPostDate().toLocalDate();
			String dateKey = dateOnly.format(dateFormatter);

			groupedByDate.putIfAbsent(dateKey, new ArrayList<>());

			QuestionDTO dto = new QuestionDTO(q.getId(), q.getQuestion(), q.getOptionA(), q.getOptionB(),
					q.getOptionC(), q.getOptionD(), q.getCorrectOption(), q.getPostDate().format(dateTimeFormatter));

			groupedByDate.get(dateKey).add(dto);
		}

		List<groupwisehistorydto> response = new ArrayList<>();

		for (Map.Entry<String, List<QuestionDTO>> entry : groupedByDate.entrySet()) {
			response.add(new groupwisehistorydto(entry.getKey(), entry.getValue()));
		}

		return response;
	}
}
