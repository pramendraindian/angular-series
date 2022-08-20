import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router,private empService:EmployeeService){

  }
 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //
    const isValidUser=true; 
    // Add a service method  and syncronize the http.get().toPromise()
    this.empService.authenticateUser();
    // if invalid user, navigate to unauthorized component 
    // this.router.navigateByUrl('/unauthorized');

    return this.empService.isValidUser;
  }
  
 
}
