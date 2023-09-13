import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _User } from '../interface/_User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  
  constructor(private http:HttpClient) { }

  private baseURL = "http://localhost:8085/login"
  private baseURL1 = "http://localhost:8085/registeruser"

  login(user: _User):Observable<any>{
    return this.http.post(`${this.baseURL}`,user)

  }
  register(user:_User):Observable<any>{
    return this.http.post(`${this.baseURL1}`,user)
  }
}
