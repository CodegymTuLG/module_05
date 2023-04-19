import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ss3Component } from './ss3/ss3.component';
import { B1calculatorComponent } from './ss3/b1calculator/b1calculator.component';
import { B2colorComponent } from './ss3/b2color/b2color.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ss4Component } from './ss4/ss4.component';
import {ArticleComponent} from './ss4/article/article.component';
import { LikeComponent } from './ss4/like/like.component';
import { NavbarComponent } from './ss4/navbar/navbar.component';
import { FooterComponent } from './ss4/footer/footer.component';
import { Ss5Component } from './ss5/ss5.component';
import { CountdownComponent } from './ss5/countdown/countdown.component';
import { StudentComponent } from './component/student/student.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { UserComponent } from './ss6/user/user.component';
import { LoginComponent } from './ss6/login/login.component';

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
    Ss5Component,
    CountdownComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentEditComponent,
    UserComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
