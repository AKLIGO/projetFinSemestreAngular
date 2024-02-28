import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClasseService } from './classe.service';
import { Classe } from './model/classe';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit{


  public listeClasse:Classe[]=[];
  constructor(private serviceClasse:ClasseService){}

  ngOnInit(): void {
    this.getClass()

  }

  public getClass():void{
    this.serviceClasse.getClasse().subscribe(
      (response:Classe[])=>{
        this.listeClasse=response;
      },
      (error: HttpErrorResponse)=>
      {
        alert(error.message)
      }
    )
  }

  public deleteClasse(classeId:number):void{
    this.serviceClasse.supprimerClasse(classeId).subscribe(
      (response:void)=>{
        console.log('classe supprimer');

        this.getClass();
      },

      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public ajoutClasse(addForm:NgForm):void{
    this.serviceClasse.ajouterClasse(addForm.value).subscribe(
      (response:Classe)=>{
        console.log(response);
        this.getClass();
      },
      (error:HttpErrorResponse)=>{
                 alert(error.message);
               }
    )
  }






}
