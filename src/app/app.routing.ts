// Import components and modules for routing
import { Routes, RouterModule} from '@angular/router';

// Components
import { HomeComponent } from './Home/home.component';
import { AdminComponent } from './Admin/admin.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { LoginComponent } from './login/login.component';
import {SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';

// Route Settings
export const appRoutes: Routes = [
    { path: '', redirectTo: 'LoginComponent', pathMatch: 'full'},
    { path: 'LoginComponent', component: LoginComponent },
    { path: 'HomeComponent', component: HomeComponent },
    { path: 'AdminComponent', component: AdminComponent },
    { path: 'AddEmployeeComponent', component: AddEmployeeComponent },
    { path: 'SignUpComponent' , component: SignUpComponent }
];
