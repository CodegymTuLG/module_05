import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ss3Component } from './ss3/ss3.component';
import { B1calculatorComponent } from './ss3/b1calculator/b1calculator.component';
import { B2colorComponent } from './ss3/b2color/b2color.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Ss3Component,
    B1calculatorComponent,
    B2colorComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
