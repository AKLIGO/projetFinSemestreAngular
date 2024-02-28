import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from './Enseignant';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiserviceurl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEnseignant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(`${this.apiserviceurl}/enseignants/liste-enseignants`);
  }

  public ajouterEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>(`${this.apiserviceurl}/enseignants/ajouter-enseignant`, enseignant);
  }

  public modifierEnseigant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.put<Enseignant>(`${this.apiserviceurl}/enseignants/modifier-enseignant/${enseignant.id}`, enseignant);
  }

  public supprimerEnseignant(enseignantId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserviceurl}/enseignants/supprimer-enseignant/${enseignantId}`, { responseType: 'text' as 'json' });
}
}
