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
        let check = this.skypeClient.clientInstance.personsAndGroupsManager.mePerson.id();
        debugger;
        this.skypeClient.clientInstance.signInManager.signOut().then(() => {
          let state = this.skypeClient.clientInstance.signInManager.state();
          if(state == "SignedIn") {
            observer.next(true);
            observer.complete();
          }
          else {
            this.skypeClient.clientInstance.signInManager.signIn({
              "version": "1234567890",
              "username": username,
              "password": password
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
        });
        
      });
    }

    logout(): any {

    }
}

