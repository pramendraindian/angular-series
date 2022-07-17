import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './services/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ERPSystem';
  empId:number=0;
  empDetails:any;
  constructor(private deptService:DepartmentService){

  }
  ngOnInit(): void {
    this.loadDepartments();
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
  loadDepartments()
  {
    this.deptService.getDepartments().subscribe(
      results=>{
        console.log(results);
      }
)
  }
}
