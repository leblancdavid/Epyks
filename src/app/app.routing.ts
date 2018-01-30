import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './authentication/login.component';
import { HomeComponent } from './home/home.component';

const appDevRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

];

//for now dev routes will be the same as prod routes
let _routing = RouterModule.forRoot(appDevRoutes);

export const routing = _routing;



