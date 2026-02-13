package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.mcqquestionmodel;

public interface mcqquestionrepository extends JpaRepository<mcqquestionmodel, Long> {
	List<mcqquestionmodel> findByGroup_GroupId(Long groupId);
}
