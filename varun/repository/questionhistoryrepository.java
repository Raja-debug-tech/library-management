package com.example.varun.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.questionhistorymodel;

public interface questionhistoryrepository extends JpaRepository<questionhistorymodel, Long> {

	List<questionhistorymodel> findAllByOrderByPostedAtDesc();
}
