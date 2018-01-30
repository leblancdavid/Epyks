import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '@nl/../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkypeClient {
  
    public initialize() : Observable<any> {
      return new Observable<any>(observer => {
        
        this.initializeSkypeApp().subscribe(result => {
          this.clientInstance = result;
          this.clientInstance.signInManager.state.when("SigningIn", () => {
            console.log('Signing in...');
          });
          this.clientInstance.signInManager.state.when("SigningOut", () => {
            console.log('Signing out...');
          });
          this.clientInstance.signInManager.state.when("SignedOut", reason => {
            console.log(reason);
          });
          this.clientInstance.signInManager.state.when("SignedIn", () => {
            console.log('Signed in...');
          });
          observer.next(this.clientInstance);
          observer.complete();
        });
      });
    }
    
    private initializeSkypeApp() : Observable<any> {
      return new Observable<any>(observer => {
        var config = {
          apiKey: 'a42fcebd-5b43-4b89-a065-74450fb91255', // SDK
          apiKeyCC: '9c967f6b-a846-4df2-b43d-5167e47d81e1' // SDK+UI
         }; 
      
        var application;
        window["Skype"].initialize({ apiKey: config.apiKey }, function (api) {
          application = new api.application();
          observer.next(application);
          observer.complete();
        }, function (err) {
            console.log(err);
            alert('Cannot initialize the Skype SDK.');
        });

      });
     
    }

    public clientInstance: any;
}
