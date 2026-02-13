package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.studenttestmodel;

public interface studenttestrepository extends JpaRepository<studenttestmodel, Long> {

	List<studenttestmodel> findByStudentIdAndGroupIdOrderByQuestionOrderAsc(Long studentId, Long groupId);

	boolean existsByStudentIdAndGroupId(Long studentId, Long groupId);

}
