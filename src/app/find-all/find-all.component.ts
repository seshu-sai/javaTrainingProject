import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable } from 'rxjs';
import { Patient} from '../patient';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {
  constructor(private _service : PatientService) { }
collection : {}
  ngOnInit(): void {
    this._service.getAll().subscribe((result) =>{
      console.warn(result)
      this.collection=result
    })
  }
}

