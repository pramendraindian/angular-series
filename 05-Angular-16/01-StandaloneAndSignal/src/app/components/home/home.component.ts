import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  appts=`
import { Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
  standalone: true
})
export class AppComponent {
  title = 'SignalDemoAng16';
  
}`;

  maints=`
  import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { provideRouter } from '@angular/router';
  import { rootRoutes } from './app/app-routes';
  import { HttpClientModule } from '@angular/common/http';
  import { importProvidersFrom } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      importProvidersFrom(FormsModule),
      importProvidersFrom(CommonModule),
      importProvidersFrom(HttpClientModule),
      // you can pass all providers from your AppModule
      provideRouter(rootRoutes),
    ], 
  }).catch(err => console.error(err));`;

  routests=`
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
      path: '**',
      redirectTo: '',
    },
  ];
  `;

}
