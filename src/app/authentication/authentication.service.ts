import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '@nl/../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService implements OnInit {
    constructor() { }

    ngOnInit() {

    }

    login(username: string, password: string): Observable<any> {
      return null;
    }

    logout(): any {

    }
}

