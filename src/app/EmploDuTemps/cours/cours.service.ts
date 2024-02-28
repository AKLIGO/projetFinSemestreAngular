import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cours } from './model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiserviceurl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getCours():Observable<Cours[]>{
    return this.http.get<Cours[]>(`${this.apiserviceurl}/cours/liste-cours`);
  }

  public ajouterCours(cour:Cours):Observable<Cours>{
    return this.http.post<Cours>(`${this.apiserviceurl}/cours/ajouter-cours`, cour);
  }

  public modifierCours(cour:Cours):Observable<Cours>{
    return this.http.put<Cours>(`${this.apiserviceurl}/cours/modifier-cours/${cour.id}`, cour);
  }

  public supprimerCours(courId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserviceurl}/cours/supprimer-cours/${courId}`, { responseType: 'text' as 'json' });
}


}
