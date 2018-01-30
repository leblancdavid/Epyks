import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SkypeClient } from './skype-client';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    routing
  ],
  providers: [SkypeClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
