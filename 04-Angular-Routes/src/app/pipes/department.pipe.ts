import { Pipe, PipeTransform } from '@angular/core';
import { DepartmentService } from '../services/department.service';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: any): string {
    return this.getDepartmentName(value);
  }
  constructor(private departmentService:DepartmentService){

  }
  private getDepartmentName(id:number)
  {
    let deptName ='';
        if(this.departmentService.departments.some(dept=>dept.departmentId===id))
        {
         const dept=this.departmentService.departments.find(item=>item.departmentId===id);
         if(dept)
         {
          deptName=dept.departmentName;
         }
         
        }
        return deptName?deptName:'Unknown Department';
  }

}
