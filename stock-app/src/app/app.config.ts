import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpXsrfInterceptor } from './interceptors/http-xsrf.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideHttpClient(
    withInterceptors([HttpXsrfInterceptor]) // Registro del interceptor
  )]
};
export const environment = {
  production: true,
  apiUrl: (typeof window !== 'undefined' && window.location.hostname === 'stockroboticaudd.netlify.app') 
    ? 'https://back-stock.onrender.com'
    : 'http://localhost:4200/api'
};