import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavberComponent } from './layout/navber/navber.component';
import { MaterialModule } from './uitools/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSignupMenuComponent } from './layout/login-signup-menu/login-signup-menu.component';
import { SinginComponent } from './pages/singin/singin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './uitools/button/button.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GithubUsersComponent } from './pages/github-users/github-users/github-users.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavberComponent,
    LoginSignupMenuComponent,
    SinginComponent,
    SignupComponent,
    ButtonComponent,
    ProfileComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
