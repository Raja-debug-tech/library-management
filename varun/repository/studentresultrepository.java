package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.studentresultmodel;

public interface studentresultrepository extends JpaRepository<studentresultmodel, Long> {

	List<studentresultmodel> findByGroupIdOrderByScoreDesc(Long groupId);
}
