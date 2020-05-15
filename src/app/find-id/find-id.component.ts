import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.component.html',
  styleUrls: ['./find-id.component.css']
})
export class FindIdComponent implements OnInit {

pid:number
  constructor(private service : PatientService) {
   }
   collection : Observable<Patient[]>;
  ngOnInit(): void {
  }
  getId(pid) {
    this.collection  =  this.service.getById(this.pid);
  }
}
