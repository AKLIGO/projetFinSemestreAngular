import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AnneeService } from './annee.service';
import { AnneeScolaire } from './model/annee-scolaire';


@Component({
  selector: 'app-annee-scolaire',
  templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.css']
})
export class AnneeScolaireComponent implements OnInit{

  public listeAnne:AnneeScolaire[]=[];
  constructor(private anneeService:AnneeService){};
  ngOnInit(): void {
      this.getAnneeScolaire()
  }

  public ajoutAnnnee(addForm:NgForm):void{

    this.anneeService.ajouterAnneeScolaire(addForm.value).subscribe(
      (response:AnneeScolaire)=>{
        console.log(response);
        this.getAnneeScolaire();

      },
      (error:HttpErrorResponse)=>{
          alert(error.message);
      }
    )
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




}
