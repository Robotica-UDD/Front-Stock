import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpXsrfInterceptor } from './interceptors/http-xsrf.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi() // Registro del interceptor desde el contenedor de inyección de dependencias
    ),
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true }
  ]
};

export const environment = {
  production: true,
  apiUrl: (typeof window !== 'undefined' && window.location.hostname === 'stockroboticaudd.netlify.app') 
    ? 'https://back-stock.onrender.com'
    : 'http://localhost:4200/api'
};