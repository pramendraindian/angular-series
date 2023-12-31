import { Component,computed,signal } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CartComponent,RouterModule,HttpClientModule],
  standalone: true
})
export class AppComponent {
  title = 'SignalDemoAng16';

}
