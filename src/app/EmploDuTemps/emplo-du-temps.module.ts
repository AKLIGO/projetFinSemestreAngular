import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeScolaireListComponent } from './annee-scolaire/annee-scolaire-list/annee-scolaire-list.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { EmploDuTempsRoutingModule } from './emplo-du-temps-routing.module';
import { EnseignantListComponent } from './enseignant/enseignant-list/enseignant-list.component';
import { GestionEmploiListComponent } from './gestion-emploi/gestion-emploi-list/gestion-emploi-list.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
// import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
import { FormsModule } from '@angular/forms';
import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
const routes: Routes = [
  {
    path:'', children:[
      {
        path:'Emploi', component:GestionEmploiComponent

      }
    ]
  }
];@NgModule({
  declarations: [
    // EmploDuTempsComponent
    
    AnneeScolaireListComponent,
    ClasseListComponent,
    CoursListComponent,
    EnseignantListComponent,
    MatiereListComponent,
    GestionEmploiListComponent
  ],
  imports: [
    CommonModule,
    EmploDuTempsRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class EmploDuTempsModule { }
