import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
result:any;
isValidFormSubmitted : boolean;
  insertPatient = new Patient();
  data = new Patient();
  constructor(private _router:Router,private service:PatientService) { }
   insertPat(form : NgForm) {
this.service.Add(this.insertPatient.pid, this.insertPatient.patientName, this.insertPatient.patientProblem, this.data).subscribe(x =>{
this.result= x;
     });
   }
   dash(){
    this._router.navigateByUrl('/dashboard');
  }
  ngOnInit(): void {
  }


}
