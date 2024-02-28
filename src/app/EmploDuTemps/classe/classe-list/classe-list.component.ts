import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../classe.service';
import { Classe } from '../model/classe';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit{

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

//   public getEnseignant():void{
//     this.enseignantService.getEnseignant().subscribe(
//       (response: Enseignant[])=>{
//           this.listEnseignant=response;
//       },
//       (error: HttpErrorResponse)=>{
//         alert(error.message);
//       }
//     )
// }
}
