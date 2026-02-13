package com.example.varun.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.varun.model.addstudentmodel;
import com.example.varun.repository.addstudentrepository;

@Service
public class addstudentservice {

	@Autowired
	private addstudentrepository studentRepository;

	@Autowired
	private JavaMailSender mailSender;

	public addstudentmodel addStudent(addstudentmodel student) {

		if (studentRepository.existsByEmail(student.getEmail())) {
			throw new RuntimeException("Email already exists");
		}

		addstudentmodel savedStudent = studentRepository.save(student);

		String username = generateUsername(savedStudent);
		String password = generatePassword(savedStudent);

		sendRegistrationMail(savedStudent, username, password);

		return savedStudent;
	}

	private String generateUsername(addstudentmodel student) {

		String name = student.getName().replaceAll("\\s+", "").toLowerCase();
		int year = student.getDob().getYear();

		return name + year;
	}

	private String generatePassword(addstudentmodel student) {

		String namePart = student.getName().substring(0, 3).toLowerCase();
		String mobile = student.getMobileNo();
		String mobilePart = mobile.substring(mobile.length() - 3);
		int year = student.getDob().getYear();

		return namePart + mobilePart + year;
	}

	private void sendRegistrationMail(addstudentmodel student, String username, String password) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(student.getEmail());
		message.setSubject("Student Login Credentials");

		message.setText("Hello " + student.getName() + ",\n\n" + "Your registration is successful.\n\n"
				+ "Login Credentials:\n" + "Username: " + username + "\n" + "Password: " + password + "\n\n"
				+ "Course: " + student.getCourse() + "\n\n" + "Please change your password after first login.\n\n"
				+ "Thank you,\nTraining Team");

		mailSender.send(message);
	}

}
