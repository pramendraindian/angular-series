import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ERPSystem';
  constructor(private deptService: DepartmentService, public empService: EmployeeService, private userService: UserService) {

  }
  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }
  newUser() {
    this.userService.addUser().subscribe(
      result=>{
        console.warn(result);

      }
    );
  }
  openWindow() {
    window.open(window.location.href + '/execution', '_blank');
  }
  closeWindow() {
    window.close();
  }
  loadEmployees() {
    this.empService.getEmployees().subscribe(
      results => {
        //console.log(results);
        this.empService.employees = results;

        this.empService.employees?.forEach(employee => {
          employee.nameCaption = employee.lastName ? employee.lastName : employee.firstName

        })
      }
    )
  }

  loadDepartments() {
    this.deptService.getDepartments().subscribe(
      results => {
        // console.log(results);
        this.deptService.departments = results;
      }
    )
  }
}
