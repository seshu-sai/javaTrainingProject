import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  result:any;
  isValidFormSubmitted : boolean;
  upatient = new Patient();
  pid:number;
  patientName:string;
  patientProblem:string;
  up = new Patient();
  constructor(private _router:Router,private service:PatientService) { }

  ngOnInit(): void {
  }
  updatePat(form : NgForm) {
    this.service.update(this.upatient.pid, this.upatient.patientName, this.upatient.patientProblem, this.up).subscribe((x) =>{
     this.result=x
    });
  }
    dash(){
      this._router.navigateByUrl('/dashboard');
    }
  }

