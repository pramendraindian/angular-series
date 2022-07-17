import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=[];
  
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
    
    return this.http.get<Employee[]>('assets/EmployeeDB.json');
  }
}
