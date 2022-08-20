import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  isValidUser = false;
  constructor(private http: HttpClient) { }
  async authenticateUser() {
    await this.getEmployees().toPromise().then(employees => {
      this.isValidUser = true;
    }).catch(
      error => {
        this.isValidUser = false;
      }
    );
  }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>('assets/EmployeeDB.json');
  }
}
