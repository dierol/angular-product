import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  model = {
    username: null,
    password: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalStorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.localStorage.remove('session');
    this.router.navigate(['/login']);
  }

}
