import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }

  getUserdata(): Observable<object>
  {
    return this.hc.get<object>('https://reqres.in/api/users');
  }
}
