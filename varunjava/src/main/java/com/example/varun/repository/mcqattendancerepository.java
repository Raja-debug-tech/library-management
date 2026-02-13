package com.example.varun.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.mcqattendmodel;

public interface mcqattendancerepository extends JpaRepository<mcqattendmodel, Long> {

	long countByStudentAndAttendedTrue(addstudentmodel student);

	Optional<mcqattendmodel> findTopByStudentOrderBySubmitTimeDesc(addstudentmodel student);
}
