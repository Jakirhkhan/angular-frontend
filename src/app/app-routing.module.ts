import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './pages/singin/singin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GithubUsersComponent } from './pages/github-users/github-users/github-users.component';
import { TaxpayersComponent } from './pages/taxpayers/taxpayers.component';
import { ViewComponent } from './pages/taxpayers/view/view.component';

const routes: Routes = [
  { path: 'sign-in', component: SinginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'github-user', component: GithubUsersComponent },
  { path: 'taxpayers', component: TaxpayersComponent },
  { path: 'taxpayers/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
