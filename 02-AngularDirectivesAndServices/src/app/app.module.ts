import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { DepartmentPipe } from './pipes/department.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HighlightDirective,
    DepartmentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Important import for services
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
