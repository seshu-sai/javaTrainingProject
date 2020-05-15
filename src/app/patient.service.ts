import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {Patient} from './patient'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
   URL="http://localhost:8000/";
  
  constructor(private http:HttpClient) { }
 
 
public getAll()  {
  return this.http.get(this.URL);
}
public Add(pid, patientName:string, patientProblem:string, data : Object) : Observable<Object>{
  var reqHeader= new HttpHeaders({'Content-type' : 'application/json',responseType: 'text'});
  return this.http.post<Object>("http://localhost:8000/add"+"/"+pid+"/"+patientName+"/"+patientProblem,data, {responseType : 'text' as 'json'});
}
public getById(pid:number) : Observable<Patient[]> {
  return this.http.get<Patient[]>("http://localhost:8000/findId/"+pid);
}
public delById(pid:number) {
   return this.http.delete("http://localhost:8000/del-user/"+pid,{responseType : 'text' as 'json'} );
}
public update(pid:any, patientName:string, patientProblem:string, data : Object) {
  return this.http.put("http://localhost:8000/update"+"/"+pid+"/"+patientName+"/"+patientProblem, data,{responseType : 'text' as 'json'});
}
}
