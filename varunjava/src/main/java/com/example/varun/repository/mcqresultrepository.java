package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.mcqresultmodel;

public interface mcqresultrepository extends JpaRepository<mcqresultmodel, Long> {

	List<mcqresultmodel> findByStudentId(Long studentId);

	List<mcqresultmodel> findByStudentIdAndGroupId(Long studentId, Long groupId);
}