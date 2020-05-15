package com.hexa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.model.Patient;
import com.hexa.service.PatientService;
@CrossOrigin
@RestController
public class PatientController {
@Autowired
	private PatientService userService;
	
	@RequestMapping("/")
	List<Patient>getAllUser(){
	
		return userService.getAllUser();
	
	}
	
	@RequestMapping(value="/add/{pid}/{patientName}/{patientProblem}",produces = {"application/json","application/xml"}, consumes="application/json")
	public String addUser(@PathVariable int pid, @PathVariable String patientName, @PathVariable String patientProblem,Patient patient) {
		userService.addUser(patient);
		return "inserted succesfully";
	}
	@DeleteMapping(value="/del-user/{pid}", produces = {"application/json"})
	public String delUser(@PathVariable int pid) 
	{
		userService.deleteUser(pid);
		return "deleted succesfully";
	}
	@DeleteMapping(value="/del-all")
	public String delAll() {
		userService.deleteAll();
		return "deleted all succesfully";
	}
	@RequestMapping(value="/findId/{pid}")
	public Patient findById(@PathVariable int pid) {
		return userService.findById(pid);
	}
	@PutMapping(value="/update/{pid}/{patientName}/{patientProblem}", produces = {"application/json","application/xml"}, consumes= "application/json")
	public String updateUser(@PathVariable int pid, @PathVariable String patientName, @PathVariable String patientProblem,Patient patient) {
		userService.addUser(patient);
		return "updated succesfully";
	}
	
	}