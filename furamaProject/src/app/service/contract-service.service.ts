import {Injectable} from '@angular/core';
import {Facility} from '../module/facility';
import {Contract} from '../module/contract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceType} from '../module/serviceType';
import {Employee} from '../module/employee';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {


  constructor(private httpClient: HttpClient) {
  }

  private API = 'http://localhost:3000/contracts';
  private API_Employee = 'http://localhost:3000/employees';


  employeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_Employee);
  }
  findAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API);
  }
  save(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.API, contract);
  }
  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${this.API}/${id}`);
  }
  edit(id: number, contract: Contract): Observable<Facility> {
    return this.httpClient.put<Facility>(`${this.API}/${id}`, contract);
  }
}
