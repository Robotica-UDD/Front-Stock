import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpXsrfInterceptor } from './app/interceptors/http-xsrf.interceptor';

bootstrapApplication(AppComponent, appConfig, {
  providers: [
    provideHttpClient(
      withInterceptors([HttpXsrfInterceptor]) // Agregar el interceptor
    ),
  ],
}).catch((err) => console.error(err));
