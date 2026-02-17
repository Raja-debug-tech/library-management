package com.example.varun.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.varun.dto.AnalyticsDto;
import com.example.varun.model.addstudentmodel;
import com.example.varun.model.groupstudentmodel;
import com.example.varun.repository.addstudentrepository;
import com.example.varun.repository.groupstudentrepository;
import com.example.varun.repository.studenttaskrepo;

@Service
public class StaffanalysisService {

	@Autowired
	addstudentrepository asrepo;
	@Autowired
	groupstudentrepository grrepo;

	@Autowired
	studenttaskrepo stdtaskrepo;

	// staff side analysis
	public ResponseEntity<?> getAnalitics(String name, String phone) {

		Optional<addstudentmodel> getstudent = asrepo.findByMobileNo(phone);
		if (getstudent.get().getName().equals(name)) {
			String studentname = name;
			groupstudentmodel grpid = grrepo.getGroupid(getstudent.get().getId());
			String groupname = grpid.getGroup().getGroupName();
			Long groupid = grpid.getGroup().getGroupId();

			long pendingnumber = stdtaskrepo.getpendingpercentage(groupid);
			System.out.println("Pending number" + pendingnumber);
			long completednumber = stdtaskrepo.getcompletedPercentage(groupid);
			System.out.println("Complted Number: " + completednumber);
			long total_task = stdtaskrepo.getcmplteratio(groupid);
			System.out.println("TotalTask : " + total_task);
			if (total_task == 0) {
				System.err.println("Nothing error happend here...");
				return null;
			}

			double compltedratio = ((double) completednumber / total_task) * 100;
			System.out.println("Complted RAtio " + compltedratio);

			AnalyticsDto analysis = new AnalyticsDto();
			analysis.setCompltednumber(completednumber);
			analysis.setCompltedratio(compltedratio);
			analysis.setGroupname(groupname);
			analysis.setName(studentname);
			analysis.setPendingnumber(pendingnumber);
			analysis.setTotal_task(total_task);
			return ResponseEntity.status(200).body(analysis);
		} else {
			return ResponseEntity.status(201).body("Student Not Found...please eneter a valid creditinals");
		}

	}
}
