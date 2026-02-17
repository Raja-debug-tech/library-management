package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.varun.model.studentresultmodel;

@Repository
public interface studentresultrepository extends JpaRepository<studentresultmodel, Long> {

	List<studentresultmodel> findByGroupIdOrderByScoreDesc(Long groupId);
}
