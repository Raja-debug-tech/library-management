package com.example.varun.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.varun.model.addstudentmodel;

public interface addstudentrepository extends JpaRepository<addstudentmodel, Long> {

	boolean existsByEmail(String email);

	Optional<addstudentmodel> findByNameIgnoreCase(String name);

	Optional<addstudentmodel> findByMobileNo(String mobileNo);

	@Query(value = "SELECT * FROM STUDENTS s WHERE s.ID NOT IN (SELECT g.STUDENT_ID FROM GROUP_STUDENTS g)", nativeQuery = true)
	public List<addstudentmodel> nonassigned();

}
