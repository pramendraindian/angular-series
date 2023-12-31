import { Component,computed,signal } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CartComponent,RouterModule],
  standalone: true
})
export class AppComponent {
  title = 'SignalDemoAng16';

}
