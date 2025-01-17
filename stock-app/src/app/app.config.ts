import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync()]
};
export const environment = {
  production: true,
  apiUrl: (typeof window !== 'undefined' && window.location.hostname === 'stockroboticaudd.netlify.app') 
    ? 'https://back-stock.onrender.com'
    : 'http://localhost:4200/api'
};