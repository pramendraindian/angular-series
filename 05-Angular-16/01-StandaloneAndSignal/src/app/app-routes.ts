import { Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component'

export const rootRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeComponent 
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component')
      .then(x => x.CartComponent)
  },
  {
    path: '**',
    redirectTo: '',
  },
];