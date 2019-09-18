import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import {MatCardModule} from '@angular/material';
import { CardsComponent } from './components/cards/cards.component';
>>>>>>> 4373302dc78fe7352a8aacfed26ba21ee605db23

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
=======
    CardsComponent
>>>>>>> 4373302dc78fe7352a8aacfed26ba21ee605db23
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
