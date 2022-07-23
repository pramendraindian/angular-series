import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isMasterSelected=false;
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }
  masterSelect(event:any)
  {
    
    const isChecked=event?.target?.checked;
    this.isMasterSelected=isChecked;
    this.empService.employees.forEach(emp=>{
      emp.isSelected=isChecked;
    })

  }

  selectEmployee(event:any, employee:Employee)
  {
    console.log(event?.target?.checked);
    const isChecked=event?.target?.checked;
    employee.isSelected=isChecked;

  }

}
