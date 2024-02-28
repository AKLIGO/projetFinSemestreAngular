import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Enseignant } from '../Enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  public listEnseignant: Enseignant[]=[];
  constructor(private enseignantService:EnseignantService){}
  ngOnInit(): void {
    this.getEnseignant();


  }

  public oneAjouterEnseignant(addForm:NgForm):void{
    
      this.enseignantService.ajouterEnseignant(addForm.value).subscribe(
        (response:Enseignant)=>{
          console.log(response);
          this.getEnseignant();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
        )
  };

  public onpenModel(enseigne:Enseignant, mode:string):void{
    const container =document.getElementById('main-container');
    const button=document.createElement('button')
    button.type='button';

    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode=='add'){
      button.setAttribute('data-target','#ajouterEnseignant');
    }

    if(mode=='edit'){
      button.setAttribute('data-target','#modifierEnseignant');
    }

    if(mode=='delete'){
      button.setAttribute('data-target','#supprimerEnseignant');
    }

    container?.appendChild(button);
    button.click();
  }

  public getEnseignant():void{
    this.enseignantService.getEnseignant().subscribe(
      (response: Enseignant[])=>{
          this.listEnseignant=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
}
}
