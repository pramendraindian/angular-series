import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserWarningComponent } from './components/browser-warning/browser-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserWarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
