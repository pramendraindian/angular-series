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
import { UserListComponent } from './components/user-list/user-list.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { BulkLoadComponent } from './components/bulk-load/bulk-load.component';
import { TablePrinterComponent } from './components/table-printer/table-printer.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HighlightDirective,
    DepartmentPipe,
    EmployeeListComponent,
    UserListComponent,
    AdvancedComponent,
    BulkLoadComponent,
    TablePrinterComponent
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
