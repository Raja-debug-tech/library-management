package com.example.varun.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.varun.model.addstudentmodel;
import com.example.varun.model.groupmodel;
import com.example.varun.model.groupstudentmodel;

@Repository
public interface groupstudentrepository extends JpaRepository<groupstudentmodel, Long> {

	@Query("SELECT gs.student FROM groupstudentmodel gs WHERE gs.group.groupId = :groupId")
	List<addstudentmodel> findStudentsByGroupId(Long groupId);

	boolean existsByGroupAndStudent(groupmodel group, addstudentmodel student);

	Optional<groupstudentmodel> findByStudent(addstudentmodel student);
}
