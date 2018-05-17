// Import components and modules for routing
import { Routes, RouterModule} from '@angular/router';

// Components
import { HomeComponent } from './Home/home.component';
import { AdminComponent } from './Admin/admin.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { NgModule } from '@angular/core';

// Route Settings
export const appRoutes: Routes = [
    { path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},
    { path: 'HomeComponent', component: HomeComponent },
    { path: 'AdminComponent', component: AdminComponent },
    { path: 'AddEmployeeComponent', component: AddEmployeeComponent }   
];
