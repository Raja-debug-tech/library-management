package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.studentanswermodel;

public interface studentanswerrepository extends JpaRepository<studentanswermodel, Long> {
	List<studentanswermodel> findByStudent_Id(Long studentId);
}
