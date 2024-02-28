import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AnneeScolaireComponent } from './annee-scolaire.component';
import { AnneeService } from './annee.service';



@NgModule({
  declarations: [

    AnneeScolaireComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


    // autres modules importés ici...
  ],
  providers: [
    AnneeService
  ],
  exports:[

  ]

})
export class AnneModule { }
