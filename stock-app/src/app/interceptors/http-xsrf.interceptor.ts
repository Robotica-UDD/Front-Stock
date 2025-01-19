import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xsrfToken = getCookie('XSRF-TOKEN'); // Reemplaza 'XSRF-TOKEN' con el nombre de tu cookie

    if (xsrfToken) {
      const clonedRequest = req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', xsrfToken)
      });
      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}


