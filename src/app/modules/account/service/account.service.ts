import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(): Observable<User>{
    return this.http.post<User>('http://localhost:8080/login?userName=test',{userName: 'test'});
  }
}
