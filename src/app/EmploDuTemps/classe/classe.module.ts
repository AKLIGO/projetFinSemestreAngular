import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ClasseComponent } from './classe.component';
import { ClasseService } from './classe.service';


@NgModule({
  declarations: [
    ClasseComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,



    // autres modules importés ici...
  ],
  providers: [
    ClasseService
  ],
  exports:[

  ]

})
export class ClasseModule { 
  
}
