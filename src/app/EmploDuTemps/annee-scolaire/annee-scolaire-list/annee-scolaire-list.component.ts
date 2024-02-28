import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnneeScolaire } from '../model/annee-scolaire';
import { AnneeService } from './../annee.service';

@Component({
  selector: 'app-annee-scolaire-list',
  templateUrl: './annee-scolaire-list.component.html',
  styleUrls: ['./annee-scolaire-list.component.css']
})
export class AnneeScolaireListComponent implements OnInit{
  public listeAnne:AnneeScolaire[]=[];

  constructor(private anneeService:AnneeService){};

  ngOnInit(): void {
    this.getAnneeScolaire();

  }

  public getAnneeScolaire():void{
    this.anneeService.getAnneeScolaire().subscribe(
      (response: AnneeScolaire[])=>{
        this.listeAnne=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public deleteAnnees(anneeId:number):void{
    this.anneeService.supprimerAnnee(anneeId).subscribe(
      (response:void)=>{
        console.log('Annee supprimer');

        this.getAnneeScolaire();
      },
      (error:  HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  // public getEnseignant():void{
  //   this.enseignatService.getEnseignant().subscribe(
  //     (response: Enseignant[])=>{
  //         this.listEnseignant=response;
  //     },
  //     (error: HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   )

  // }




}
