import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ecole } from '../interface/ecole';
import { Observable, catchError, tap, throwError } from 'rxjs';

let counter = 0;

@Injectable({
  providedIn: 'root'
})
export class EcolesService {
  
  
  // id: number;

  // constructor(private http : HttpClient) {
  //   counter++;

  //   this.id = counter;
  //  }

  //  getEcoles() : Observable<Ecole[]> {

  //    const params = new HttpParams()
  //         .set("page", "1")
  //         .set("pageSize", "10");

  //     return this.http.get<Ecole[]>('/Ecoles', {params});
  //  }


  constructor(private http : HttpClient) {}
    // apiUrl: string ='http://localhost:8085/Ecoles'


  //   ecoles$ = <Observable<Ecole>>
  //     this.http.get<Ecole>(`${this.apiUrl}/Ecoles`)
  //       .pipe(
  //         tap(console.log),
  //         catchError(this.handleError)
  //       );




  // }
  // handleError(handleError: any): Observable<never> {
  //   return throwError('Method not implemented')
  // 

  

  private baseURL = "http://localhost:8085/Ecoles"

  // getEcoles()  {
  //   // return this.http.get<Ecole>(this.apiUrl);
  //   //Observable<Ecole>
  //   return this.http.get("http://localhost:8085/Ecoles");
  // }

  getEcoles():Observable<Ecole[]>{
    return this.http.get<Ecole[]>(`${this.baseURL}`);

  }

  createEcole(ecole:Ecole): Observable<Object>{
    return this.http.post(`${this.baseURL}/saveecole`,ecole);
  }

  getEcoleById(id:number):Observable<Ecole>{
    return this.http.get<Ecole>(`${this.baseURL}/${id}`)
  }

  updateEcole(id:number, ecole:Ecole){
    return this.http.put(`${this.baseURL}/${id}`,ecole);
  }

  deleteEcole(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  






}
