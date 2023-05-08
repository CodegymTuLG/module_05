import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {ListServiceComponent} from './component/list-service/list-service.component';
import {EditServiceComponent} from './component/edit-service/edit-service.component';
import {AddServiceComponent} from './component/add-service/add-service.component';
import {ListCustomerComponent} from './component/list-customer/list-customer.component';
import {EditCustomerComponent} from './component/edit-customer/edit-customer.component';
import {AddCustomerComponent} from './component/add-customer/add-customer.component';
import {AddContractComponent} from './component/add-contract/add-contract.component';
import {ListContractComponent} from './component/list-contract/list-contract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListServiceComponent,
    EditServiceComponent,
    AddServiceComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
