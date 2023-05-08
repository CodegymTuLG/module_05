import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponentComponent} from './ss7/bt1/component/dictionary-detail-component/dictionary-detail-component.component';

const routes: Routes = [
  { path: 'detail', component: DictionaryDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
