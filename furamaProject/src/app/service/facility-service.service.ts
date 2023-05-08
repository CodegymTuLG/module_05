import {Injectable} from '@angular/core';
import {Facility} from '../module/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../module/customer';
import {RentType} from '../module/rentType';
import {ServiceType} from '../module/serviceType';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  services: Facility[];
  private API = 'http://localhost:3000/services';
  private API_Rent_Type = 'http://localhost:3000/rentTypes';
  private API_Service_Type = 'http://localhost:3000/serviceType';
  service: Facility;

  rentTypeSelect(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.API_Rent_Type);
  }
  serviceTypeSelect(): Observable<ServiceType[]> {
    return this.httpClient.get<ServiceType[]>(this.API_Service_Type);
  }
  findAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API);
  }
  save(service: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.API, service);
  }
  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${this.API}/${id}`);
  }
  edit(id: number, service: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`${this.API}/${id}`, service);
  }
  delete(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(`${this.API}/${id}`);
  }
  search(name: string) {
    return this.httpClient.get(`${this.API}?name_like=${name}`);
  }
  search2(name: string, rentprice: string) {
    return this.httpClient.get(`${this.API}?name_like=${name}&rentprice=${rentprice}`);
  }
  search3(name: string, rentpriceFrom: string, rentpriceTo: string) {
    return this.httpClient.get(`${this.API}?name_like=${name}&rentprice_gte=${rentpriceFrom}&rentprice_lte=${rentpriceTo}`);
  }
  search4(name: string, rentType: string) {
    return this.httpClient.get(this.API + '?name_like=' + name + '&rentType.name=' + rentType);
  }
}
