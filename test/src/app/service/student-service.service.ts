import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../module/student';

@Injectable({
  providedIn: 'root'
})
export class Studentstudentstudent {

  constructor(private httpClient: HttpClient) { }
  private API = 'http://localhost:3000/students';

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API);
  }

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API, student);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.API}/${id}`);
  }

  edit(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API}/${id}`, student);
  }

  search(name: string) {
    return this.httpClient.get(`${this.API}?name_like=${name}`);
  }

  search2(from: string, to: string) {
    return this.httpClient.get(this.API + '?birthDay_gte=' + from + '&birthDay_lte=' + to);
  }

  search3(name: string, score: string) {
    return this.httpClient.get(this.API + '?name_like=' + name + '&score_gte=' + score);
  }
}
