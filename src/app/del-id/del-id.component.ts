import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-del-id',
  templateUrl: './del-id.component.html',
  styleUrls: ['./del-id.component.css']
})
export class DelIdComponent implements OnInit {
pid:number;
user : any;
  constructor(private service: PatientService) { }

  ngOnInit(): void {
  }
 del(pid) {
  let resp= this.service.delById(this.pid).subscribe((x) =>{
     this.user=x
   })
 }
}
