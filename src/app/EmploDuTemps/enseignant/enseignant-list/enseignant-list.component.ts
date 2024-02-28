import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../Enseignant';
import { EnseignantService } from '../../enseignant.service';

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit{

    public listEnseignant: Enseignant[]=[];

    constructor(private enseignatService:EnseignantService){

    }
    ngOnInit(): void {
        this.getEnseignant();
    }

    public getEnseignant():void{
      this.enseignatService.getEnseignant().subscribe(
        (response: Enseignant[])=>{
            this.listEnseignant=response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      )

    }

    public deleteEnseignant(enseignantId: number):void{
      this.enseignatService.supprimerEnseignant(enseignantId).subscribe(
        (response: void) => {
                 console.log('Enseignant supprimé');

                 this.getEnseignant();
              },
               (error: HttpErrorResponse) => {
                 alert(error.message);
              }

      )
    }





}
