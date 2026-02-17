package com.example.varun.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.varun.model.studenttaskmodel;

@Repository
public interface studenttaskrepo extends JpaRepository<studenttaskmodel, Long> {

	@Query(value = "select count(*) from student_tasks where student_id=:num", nativeQuery = true)
	public int getcompletedPercentage(@Param("num") long num);

	@Query(value = "with mcqid as (select * from mcq_questions  where group_group_id=:num) select count(*)- (select count(*) from student_tasks where task_id=:num) from mcqid", nativeQuery = true)
	public int getpendingpercentage(@Param("num") long num);

	@Query(value = "select count(*) from mcq_questions  where group_group_id=:num", nativeQuery = true)
	public int getcmplteratio(@Param("num") long num);

}
