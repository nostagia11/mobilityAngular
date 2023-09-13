import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from '../interface/condidature';

@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {

  constructor(private http : HttpClient) { }
  private baseURL = "http://localhost:8085/resultat/score"

  getResultat():Observable<Candidature[]>{
    return this.http.get<Candidature[]>(`${this.baseURL}`);

  }
}
