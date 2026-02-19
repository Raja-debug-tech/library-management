package com.example.varun.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.varun.model.Group_check;

public interface Groupcheckrepo extends JpaRepository<Group_check, Integer> {

	@Transactional
	@Modifying
	@Query(value = "INSERT INTO GROUP_CHECK (STUDENT_ID) VALUES (:stdid)", nativeQuery = true)
	void insertStudent(@Param("stdid") long stdid);
}
