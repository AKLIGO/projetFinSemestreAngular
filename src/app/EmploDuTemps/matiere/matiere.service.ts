import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matiere } from './model/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiserviceurl=environment.apiBaseUrl;
  constructor(private http:HttpClient) {

  }
  public getMatiere():Observable<Matiere[]>{
    return this.http.get<Matiere[]>(`${this.apiserviceurl}/matieres/liste-matieres`);
  }

  public ajouterMatiere(matiere:Matiere):Observable<Matiere>{
    return this.http.post<Matiere>(`${this.apiserviceurl}/matieres/ajouter-matiere`, matiere);
  }

  public modifierMatiere(matiere:Matiere):Observable<Matiere>{
    return this.http.put<Matiere>(`${this.apiserviceurl}/matieres/modifier-matiere/${matiere.id}`, matiere);
  }

  public supprimerMatiere(matiereId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserviceurl}/matieres/supprimer-matiere/${matiereId}`, { responseType: 'text' as 'json' });
}
}
