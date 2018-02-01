import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '@nl/../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

//import { Api, connect } from "skype-http";

@Injectable()
export class SkypeClient {
  //public clientApi: Api;

  public connect(username: string, password: string): Observable<any> {
    return new Observable<any>(observer => {
      // connect({credentials: {username: username, password: password}})
      // .then(result => {
      //   this.clientApi = result;
      //   observer.next(true);
      //   observer.complete();
      // })
      // .catch(reason => {
      //   console.error(reason);
      //   observer.next(false);
      //   observer.complete();
      // });

    });
  }
    
}
