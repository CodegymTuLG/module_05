import { Injectable } from '@angular/core';
import {Facility} from '../module/facility';
import {Customer} from '../module/customer';
import {AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentType} from '../module/rentType';
import {CustomerType} from '../module/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) { }
  private API = 'http://localhost:3000/customers';
  private API_Customer_Type = 'http://localhost:3000/customerTypes';

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }
  customerTypeSelect(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_Customer_Type);
  }
  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API, customer);
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.API}/${id}`);
  }
  edit(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.API}/${id}`, customer);
  }
}
