package com.example.varun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.groupmodel;

public interface grouprepository extends JpaRepository<groupmodel, Long> {
	groupmodel findByGroupName(String groupName);
}
