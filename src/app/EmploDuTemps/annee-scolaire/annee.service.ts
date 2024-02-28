import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnneeScolaire } from './model/annee-scolaire';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {

  private apiserviceurl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAnneeScolaire():Observable<AnneeScolaire[]>{
    return this.http.get<AnneeScolaire[]>(`${this.apiserviceurl}/anneScolaires/liste-anneeScolaire`);
  }

  public ajouterAnneeScolaire(anneeScolaire:AnneeScolaire):Observable<AnneeScolaire>{
    return this.http.post<AnneeScolaire>(`${this.apiserviceurl}/anneScolaires/ajouter-anneeScolaire`, anneeScolaire);
  }

  public modifierAnnee(anneeScolaire:AnneeScolaire):Observable<AnneeScolaire>{
    return this.http.put<AnneeScolaire>(`${this.apiserviceurl}/anneScolaires/modifier-anneeScolaire/${anneeScolaire.id}`, anneeScolaire);
  }

  public supprimerAnnee(anneeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserviceurl}/anneScolaires/supprimer-anneeScolaire/${anneeId}`, { responseType: 'text' as 'json' });
}
}
