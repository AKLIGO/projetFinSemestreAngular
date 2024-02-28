import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeScolaireListComponent } from './annee-scolaire/annee-scolaire-list/annee-scolaire-list.component';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { ClasseComponent } from './classe/classe.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { CoursComponent } from './cours/cours.component';
import { EmploDuTempsComponent } from './emplo-du-temps.component';
import { EnseignantListComponent } from './enseignant/enseignant-list/enseignant-list.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { GestionEmploiListComponent } from './gestion-emploi/gestion-emploi-list/gestion-emploi-list.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
import { MatiereComponent } from './matiere/matiere.component';

const routes: Routes = [
  {
    path:'', component:EmploDuTempsComponent,
    children:[
      {
        path:'matiere', component:MatiereComponent
      },
      {
        path:'listesmatiere', component:MatiereListComponent
      },
      {
        path:'classe', component:ClasseComponent
      },
      {
        path:'listesclasse', component:ClasseListComponent
      },
      {
        path:'cours', component:CoursComponent
      },

      {
        path:'listescours', component:CoursListComponent
      },

      {
        path:'anneeScolaire', component:AnneeScolaireComponent
      },

      {
        path:'listesanneeScolaire', component:AnneeScolaireListComponent
      },

      {
        path:'enseignant', component:EnseignantComponent
      },

      {
        path:'listesenseignant', component:EnseignantListComponent
      },

      {
        path:'emploie', component:GestionEmploiComponent
      },
      {
        path:'listesemploie', component:GestionEmploiListComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploDuTempsRoutingModule { }
