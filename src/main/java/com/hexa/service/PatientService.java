package com.hexa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.model.Patient;
import com.hexa.repository.PatientRepository;

import java.util.*;

@Service
public class PatientService {
	@Autowired	
	private PatientRepository patientRepo;
	
	public List<Patient>getAllUser(){
		List<Patient> patientRecords = new ArrayList<>();
		
		patientRepo.findAll().forEach(patientRecords::add);
		return patientRecords;
		
	}
	public Patient addUser( Patient patient1) {
	return patientRepo.save(patient1);
	
	}
	public void deleteUser(int pid) {
		patientRepo.deleteById(pid);
	}
	public void deleteAll() {
		patientRepo.deleteAll();
	}
	public Patient findById(int pid) {
		return patientRepo.findById(pid).orElse(null);
	
	}
	public void update( Patient patient) {
		 patientRepo.save(patient);
	}
}
