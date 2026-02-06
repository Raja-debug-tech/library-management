package com.example.varun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.coursemodel;

public interface courserepository extends JpaRepository<coursemodel, Long> {
	boolean existsByNameIgnoreCase(String name);
}
