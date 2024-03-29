import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';
import { UserService } from './services/user.service';
import { Column } from './components/table-printer/table-printer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'ERPSystem';
  isClosing=false;
  columns:Column[]=[
    {
      id:'userId',
      title:'User Id',
      width:'50%'
    },
    {
      id:'fullName',
      title:'Full Name',
      width:'50%'
    }
     
  ]
  constructor(private deptService: DepartmentService, public empService: EmployeeService, private userService: UserService,private router:Router) {

  }

  
  ngOnDestroy(): void {
    debugger;
    alert('hello');
    // window.addEventListener("beforeunload", function (e) { return true; });
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

  navigateToARoute()
  {
    // this.router.navigate(['/users',100]);
    console.warn('Clicked')
    //console.warn(this.router);
    this.router.navigateByUrl('/users');
  }

  navigateToARouteWithParameters()
  {
    this.router.navigate(['/users',100]);
   
  }
}
