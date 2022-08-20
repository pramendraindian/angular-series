import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LeavePageGuard } from './guards/leave-page.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
{path:'',component:EmployeeListComponent},
{path:'users',component:UserListComponent,canDeactivate:[LeavePageGuard]},
{path: 'users/:id', component: UserListComponent ,canActivate:[LoginGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
