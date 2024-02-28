import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classe } from './model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private apiserviceurl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getClasse():Observable<Classe[]>{
    return this.http.get<Classe[]>(`${this.apiserviceurl}/classes/liste-classes`);
  }

  public ajouterClasse(classe:Classe):Observable<Classe>{
    return this.http.post<Classe>(`${this.apiserviceurl}/classes/ajouter-classe`, classe);
  }

  public modifierClasse(classe:Classe):Observable<Classe>{
    return this.http.put<Classe>(`${this.apiserviceurl}/classes/modifier-classe/${classe.id}`, classe);
  }

  public supprimerClasse(classeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiserviceurl}/classes/supprimer-classe/${classeId}`, { responseType: 'text' as 'json' });
}
}
