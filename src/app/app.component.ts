import { Component, AfterViewInit } from '@angular/core';
import { SkypeClient } from './skype-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(private skypeClient : SkypeClient) {

  }

  ngAfterViewInit() {
  }
}
