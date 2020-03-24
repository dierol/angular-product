import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable()
export class SessionTokenInterceptor implements HttpInterceptor {

  constructor( private localStorage: LocalStorageService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let session = this.localStorage.get('session') || {};

    let sessionToken = session.access_token || '';
    const authReq = request.clone({
      headers: request.headers.set('Authorization', sessionToken)
    });

    return next.handle(authReq);
  }
}
