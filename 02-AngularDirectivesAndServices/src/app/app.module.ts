import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { DepartmentPipe } from './pipes/department.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { TestDirective } from './directives/test.directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HighlightDirective,
    DepartmentPipe,
    EmployeeListComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule // Important import for services
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
