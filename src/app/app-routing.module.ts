import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { DonationComponent } from './PAGES/donation/donation.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'donate', component: DonationComponent},
  {path: 'about', component:AboutusComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
