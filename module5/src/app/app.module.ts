import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ss3Component } from './ss3/ss3.component';
import { B1calculatorComponent } from './ss3/b1calculator/b1calculator.component';
import { B2colorComponent } from './ss3/b2color/b2color.component';
import {FormsModule} from '@angular/forms';
import { Ss4Component } from './ss4/ss4.component';
import {ArticleComponent} from './ss4/article/article.component';
import { LikeComponent } from './ss4/like/like.component';
import { NavbarComponent } from './ss4/navbar/navbar.component';
import { FooterComponent } from './ss4/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        Ss3Component,
        B1calculatorComponent,
        B2colorComponent,
        Ss4Component,
        ArticleComponent,
        ArticleComponent,
        LikeComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
