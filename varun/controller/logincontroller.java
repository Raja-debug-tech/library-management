package com.example.varun.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.varun.model.loginmodel;
import com.example.varun.service.loginservice;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class logincontroller {

	private final loginservice loginservice;

	public logincontroller(loginservice userService) {
		this.loginservice = userService;
	}

	@PostMapping("/signup")
	public String signup(@RequestBody loginmodel user) {
		loginservice.register(user);
		return "User registered successfully";
	}

	@PostMapping("/stafflogin")
	public ResponseEntity<?> staffLogin(@RequestParam String email, @RequestParam String password) {
		boolean success = loginservice.login(email, password);
		if (success) {
			return ResponseEntity.status(200).body("Login Successfull");
		} else {
			return ResponseEntity.status(200).body("User not valid so login failed...");

		}
	}

	@PostMapping("/login")
	public String login(@RequestParam String email, @RequestParam String password) {

		boolean success = loginservice.login(email, password);
		return success ? "Login successful" : "Invalid email or password";
	}

	@PutMapping("/forgot-password")
	public String forgotPassword(@RequestParam String email, @RequestParam String newPassword) {

		boolean updated = loginservice.resetPassword(email, newPassword);
		return updated ? "Password updated successfully" : "User not found";
	}
}
