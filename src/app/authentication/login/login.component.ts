import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  login(): void {
    let id = this.model.username+this.model.password;
    this.authenticationService.login(id).then(
      response => {
        this.localStorage.set('session', response);
        this.router.navigate(['/products']);
      },
      error => alert('You are not registered!')
    );
  }

}
