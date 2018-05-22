import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './Home/home.component';
import { AdminComponent } from './Admin/admin.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { LoginComponent } from './login/login.component';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { Observable } from 'rxjs/Observable';
import { SignUpComponent } from './sign-up/sign-up.component';

let providers = {
  "google": {
    "clientId": "677869367642-l496mk91116dhpffr4k1gmsn0hq4jd19.apps.googleusercontent.com"
  },
  "linkedin": {
    "clientId": "TWITTER_CLIENT_ID"
  },
  "facebook": {
    "clientId": "120294728851435",
    "apiVersion": "v3.0" //like v2.4
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AddEmployeeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,  Angular2SocialLoginModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
