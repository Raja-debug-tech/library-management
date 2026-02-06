package com.example.varun.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.varun.model.loginmodel;
import com.example.varun.repository.loginrepository;

@Service
public class loginservice {

	private final loginrepository loginrepository;

	public loginservice(loginrepository loginrepository) {
		this.loginrepository = loginrepository;
	}

	public loginmodel register(loginmodel user) {
		return loginrepository.save(user);
	}

	public boolean login(String email, String password) {
		Optional<loginmodel> user = loginrepository.findByEmail(email);
		return user.isPresent() && user.get().getPassword().equals(password);
	}

	public boolean resetPassword(String email, String newPassword) {
		Optional<loginmodel> user = loginrepository.findByEmail(email);
		if (user.isPresent()) {
			user.get().setPassword(newPassword);
			loginrepository.save(user.get());
			return true;
		}
		return false;
	}
}
