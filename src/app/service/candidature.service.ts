import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from '../interface/condidature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8085/candidatures"

  getCandidatures():Observable<Candidature[]>{
    return this.http.get<Candidature[]>(`${this.baseURL}`);

  }

  getResultat():Observable<Candidature[]>{
    return this.http.get<Candidature[]>(`${this.baseURL}`);

  }

  createCandidature(Candidature:Candidature): Observable<Object>{
    return this.http.post(`${this.baseURL}/saveCandidature`,Candidature);
  }

  getCandidatureById(id:number):Observable<Candidature>{
    return this.http.get<Candidature>(`${this.baseURL}/${id}`)
  }

  updateCandidature(id:number, Candidature:Candidature){
    return this.http.put(`${this.baseURL}/${id}`,Candidature);
  }

  deleteCandidature(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
}
}
