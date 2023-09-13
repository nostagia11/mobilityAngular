import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from '../interface/offers';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) {}
   

  private baseURL = "http://localhost:8085/offers"

  getOffers():Observable<Offers[]>{
    return this.http.get<Offers[]>(`${this.baseURL}`);

  }

  createOffer(offer:Offers): Observable<Object>{
    return this.http.post(`${this.baseURL}/saveoffer`,offer);
  }

  getOfferById(id:number):Observable<Offers>{
    return this.http.get<Offers>(`${this.baseURL}/${id}`);
  }

  updateOffer(id:number,offer:Offers){
    return this.http.put(`${this.baseURL}/${id}`,offer);
  }

  deleteOffer(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
