import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit,DoCheck {
@Input() empId:number=0;
@Output() empDetailsFetched:EventEmitter<any>=new EventEmitter()
@Output() empDetailsAdded:EventEmitter<void>=new EventEmitter()
  constructor() { }
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
  this.empDetailsFetched.emit({empId:this.empId,fullName:'Singh, Pramendra'})
  this.empDetailsAdded.emit();
  }

  ngOnInit(): void {
    console.warn('ngOnInit fired');
   
  }

}
