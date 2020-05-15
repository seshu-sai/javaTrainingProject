package com.hexa.repository;

import org.springframework.data.repository.CrudRepository;

import com.hexa.model.Patient;

public interface PatientRepository extends CrudRepository<Patient, Integer> {

}
