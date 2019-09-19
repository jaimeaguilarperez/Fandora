import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GenpostComponent } from './components/genpost/genpost.component';
import { ShopComponent } from './components/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    HeaderComponent,
    ProfileComponent,
    GenpostComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
