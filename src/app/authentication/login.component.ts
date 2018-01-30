import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    model: any = {};
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.model = { username: '', password: '' };
    }

    ngOnInit() {
    }

    login() {
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(result => {
            debugger;
              if (result) {
                  // login successful
                  this.router.navigate(['/']);
              } else {
                  // login failed
                  console.error("login failed!")
              }
          });
    }
}