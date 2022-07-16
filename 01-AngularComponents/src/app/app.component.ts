import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERPSystem';
  empId:number=0;
  empDetails:any;
  queryEmployee(eId:string)
  {
    this.empId=Number(eId);
  }
  showEmpDetails(employeeDetail:any)
  {
    console.warn(employeeDetail);
    this.empDetails=employeeDetail;
  }
}
