import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = '../../../assets/user.json';

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
