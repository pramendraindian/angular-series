import { Component, OnInit,Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-table-printer',
  templateUrl: './table-printer.component.html',
  styleUrls: ['./table-printer.component.css']
})
export class TablePrinterComponent implements OnInit {
  @Input() columns:Column[]=[];
  @Input() dataSet:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
 

}
export interface Table{
  columns: Column[];
}
export interface Column{
id:string;
title:string;
width:string
}
