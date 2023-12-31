/*
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { rootRoutes } from './app/app-routes';
bootstrapApplication(AppComponent, { 
  providers: [
    // you can pass all providers from your AppModule
    provideRouter(rootRoutes),
  ], 
}).catch(err => console.error(err));
