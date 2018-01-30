import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';


import {
  AuthenticationService,
} from './authentication.service';

import {
    LoginComponent,
} from './login.component';

export {
    AuthenticationService,
} from './authentication.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    entryComponents: [
    ],
    providers: [
        AuthenticationService
    ],
})

export class AuthenticationModule {
}
