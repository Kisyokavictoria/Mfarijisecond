import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { HeaderComponent } from './FRAMES/header/header.component';
import { FooterComponent } from './FRAMES/footer/footer.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { DonationComponent } from './PAGES/donation/donation.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    DonationComponent,
    AboutusComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
