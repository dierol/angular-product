import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-localstorage';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class SessionTokenInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private localStorage: LocalStorageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let sessionToken = this.authenticationService.getSessionToken();

    let authReq = request.clone();
    if (null !== sessionToken) {
      authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer '+sessionToken)
      });
    }

    return next.handle(authReq);
  }
}
