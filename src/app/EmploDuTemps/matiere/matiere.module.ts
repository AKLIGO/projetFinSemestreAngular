import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { MatiereComponent } from './matiere.component';
import { MatiereService } from './matiere.service';



@NgModule({
  declarations: [

    MatiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


    
  ],
  providers: [
    MatiereService
  ],
  exports:[

  ]

})
export class MatiereModule { }
