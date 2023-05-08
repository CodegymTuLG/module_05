import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponentComponent} from './ss7/bt1/component/dictionary-detail-component/dictionary-detail-component.component';

const routes: Routes = [
  { path: 'detail', component: DictionaryDetailComponentComponent},
  {
    path: 'product',
    loadChildren: () => import('./ss7/bt2/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./ss7/bt2/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./ss7/bt2/shared/shared.module').then(module => module.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
