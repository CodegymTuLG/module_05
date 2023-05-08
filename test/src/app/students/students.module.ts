import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';
import {StudentsRoutingModule} from './students-routing.module';



@NgModule({
  declarations: [ListComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
