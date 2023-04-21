import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SignUpComponent } from './Component/sign-up/sign-up.component';
=======
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,

    SignUpComponent
=======
    CardsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule
=======
    MatCardModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule,MatCardModule]
})
export class AppModule { }
