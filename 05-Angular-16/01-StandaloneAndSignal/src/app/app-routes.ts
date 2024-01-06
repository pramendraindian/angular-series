import { Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component';

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
    path: 'poke',
    loadComponent: () => import('./components/pokemon/pokemon.component')
      .then(x => x.PokemonComponent)
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./components/rx-js-examples/rx-js-examples.component')
      .then(x => x.RxJsExamplesComponent)
  },
  {
    path: '**',
    redirectTo: '',
  },
];