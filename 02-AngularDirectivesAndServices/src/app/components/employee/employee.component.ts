import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { DepartmentPipe } from 'src/app/pipes/department.pipe';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[DepartmentPipe]
  
})
export class EmployeeComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit,DoCheck {
@Input() employee:Employee= {} as Employee;
@Output() empDetailsAdded:EventEmitter<void>=new EventEmitter()
  constructor(private deptPipe:DepartmentPipe) { }
  ngDoCheck(): void {
    console.warn('ngDoCheck fired');
  }
  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit fired');
  }
  ngOnDestroy(): void {
    console.warn('ngOnDestroy fired');
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.warn('ngOnChanges fired');
  this.empDetailsAdded.emit();
  }

  ngOnInit(): void {
    console.warn('ngOnInit fired');
    console.log(this.deptPipe.transform(1));
   
  }
  

}
