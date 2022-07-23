import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Department } from '../models/Deparment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments:Department[]=[];
  constructor(private http:HttpClient) { 

  }
  getDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>('assets/DepartmentDB.json');
  }
}
