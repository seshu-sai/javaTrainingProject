package com.hexa.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Patient {

	
	@Id
	private int pid;
	private String patientName;
	private String patientProblem;
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getPatientProblem() {
		return patientProblem;
	}
	public void setPatientProblem(String patientProblem) {
		this.patientProblem = patientProblem;
	}
	@Override
	public String toString() {
		return "Patient [pid=" + pid + ", patientName=" + patientName + ", patientProblem=" + patientProblem + "]";
	}
	
}
