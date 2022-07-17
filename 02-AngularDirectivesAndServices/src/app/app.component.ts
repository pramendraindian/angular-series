import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ERPSystem';
  empId:number=0;
  empDetails:any;
  constructor(private deptService:DepartmentService,public empService:EmployeeService){

  }
  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }
  queryEmployee(eId:string)
  {
    this.empId=Number(eId);
  }
  showEmpDetails(employeeDetail:any)
  {
    console.warn(employeeDetail);
    this.empDetails=employeeDetail;
  }
  loadEmployees()
  {
    this.empService.getEmployees().subscribe(
      results=>{
        console.log(results);
        this.empService.employees=results;
      }
)
  }

  loadDepartments()
  {
    this.deptService.getDepartments().subscribe(
      results=>{
        console.log(results);
        this.deptService.departments=results;
      }
)
  }
}
