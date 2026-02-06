package com.example.varun.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.varun.model.loginmodel;

public interface loginrepository extends JpaRepository<loginmodel, Long> {

	Optional<loginmodel> findByEmail(String email);
}
