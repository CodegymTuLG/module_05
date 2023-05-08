import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContractComponent} from './component/list-contract/list-contract.component';
import {ListCustomerComponent} from './component/list-customer/list-customer.component';
import {ListServiceComponent} from './component/list-service/list-service.component';
import {EditServiceComponent} from './component/edit-service/edit-service.component';
import {EditCustomerComponent} from './component/edit-customer/edit-customer.component';
import {AddCustomerComponent} from './component/add-customer/add-customer.component';
import {AddContractComponent} from './component/add-contract/add-contract.component';
import {AddServiceComponent} from './component/add-service/add-service.component';

const routes: Routes = [
  { path: 'listcontract', component: ListContractComponent},
  { path: 'listcustomer', component: ListCustomerComponent},
  { path: 'listservice', component: ListServiceComponent},
  { path: 'listservice/editservice/:id', component: EditServiceComponent},
  { path: 'listcustomer/editcustomer/:id', component: EditCustomerComponent},
  { path: 'addcustomer', component: AddCustomerComponent},
  { path: 'addcontract', component: AddContractComponent},
  { path: 'addservice', component: AddServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
