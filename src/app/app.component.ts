import { Component, OnInit } from '@angular/core';
import { SkypeClient } from './skype-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private skypeClient : SkypeClient) {

  }

  ngOnInit() {
    this.skypeClient.initialize().subscribe(result => {
      console.log("SkypeClient was initialized correctly.");
      console.log(this.skypeClient.clientInstance);
    });
    
  }
}
