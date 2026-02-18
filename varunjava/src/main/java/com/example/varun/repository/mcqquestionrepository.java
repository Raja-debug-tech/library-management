package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.varun.model.mcqquestionmodel;

@Repository
public interface mcqquestionrepository extends JpaRepository<mcqquestionmodel, Long> {

	// Get all questions for one group (latest first)
	@Query("SELECT m FROM mcqquestionmodel m WHERE m.group.groupId = :groupId ORDER BY m.postDate DESC")
	List<mcqquestionmodel> findByGroupIdOrderByPostDateDesc(Long groupId);

	// Get all questions (latest first)
	List<mcqquestionmodel> findAllByOrderByPostDateDesc();

	List<mcqquestionmodel> findByGroup_GroupId(Long groupId);
}
