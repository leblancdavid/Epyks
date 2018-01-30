import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '@nl/../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { SkypeClient } from '../skype-client';

@Injectable()
export class AuthenticationService implements OnInit {
    constructor(private skypeClient: SkypeClient) { }

    ngOnInit() {

    }

    login(username: string, password: string): Observable<boolean> {
      return new Observable<boolean>(observer => {
        if(this.skypeClient.clientInstance.signInManager.state() == "SignedIn") {
          observer.next(true);
          observer.complete();
        }
        else {
          this.skypeClient.clientInstance.signInManager.signIn({
            username: username,
            password: password,
            domain: '.skype'
          }).then(() => {
            observer.next(true);
            observer.complete();
          },
          error => {
            console.error(error);
            observer.next(false);
            observer.complete();
          })
        }
      })
    }

    logout(): any {

    }
}

