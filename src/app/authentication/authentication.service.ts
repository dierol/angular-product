import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-localstorage';
import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) { }

  // login(id: string): Observable<Authentication>{
  //   return this.http.get<Authentication>('http://localhost:3000/user?q='+id);
  // }
  login(id: string) {
    let p = new Promise((resolve, reject) => {
      resolve({
        access_token: 'xyz',
        user: {
          id: 1, firstname: 'diego'
        }
      })
    });

    return p;
  };

  // si potrebbe fafilmente riarrangiare il tutto in modo
  // che "isLoggedIn" diventi una proprietà di tipo boolean 
  // che viene valorizzata a true al login (in caso di successo)
  // e, inserendo una funzionalità di logout al servizio, venga poi
  // settata a false al logout.
  isLoggedIn(): boolean {
    let session = this.localStorage.get('session') || {};

    let sessionToken = session.access_token || '';

    return !!sessionToken;
  };

  getSessionToken(): string | null {
    let session = this.localStorage.get('session') || {};

    return session.access_token || null;
  }
}
