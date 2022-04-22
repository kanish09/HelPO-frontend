import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/homepage/search/search.component';
import { LowerComponent } from './components/homepage/lower/lower.component';
import { ConsultComponent } from './components/consult/consult.component';
import { FilterComponent } from './components/consult/filter/filter.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { TestComponent } from './components/test/test.component';
import { ChatComponent } from './components/chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    LowerComponent,
    ConsultComponent,
    FilterComponent,
    MedicinesComponent,
    TestComponent,
    ChatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
