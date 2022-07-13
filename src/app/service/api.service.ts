import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endPoint = {
    root: 'https://jsonplaceholder.typicode.com',
    path: 'users'
  };

  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.endPoint.root}/${this.endPoint.path}`);
  };

  constructor(private http: HttpClient) { }
}
