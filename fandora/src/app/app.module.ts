import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GenpostComponent } from './components/genpost/genpost.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserComponent } from './components/user/user.component';



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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
