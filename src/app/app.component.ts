import { Component, AfterViewInit } from '@angular/core';
import { SkypeClient } from './skype-client';
import path from "path";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor() {

  }

  ngAfterViewInit() {
    let posix = path.posix;
    debugger;
  }
}
