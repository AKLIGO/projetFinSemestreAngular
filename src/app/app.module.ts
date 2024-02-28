import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AnneModule } from './EmploDuTemps/annee-scolaire/anne.module';
import { BodyComponent } from './EmploDuTemps/body/body.component';
import { ClasseModule } from './EmploDuTemps/classe/classe.module';
import { CoursComponent } from './EmploDuTemps/cours/cours.component';
import { EmploDuTempsComponent } from './EmploDuTemps/emplo-du-temps.component';
import { EnseignantService } from './EmploDuTemps/enseignant.service';
import { EnseignantComponent } from './EmploDuTemps/enseignant/enseignant.component';
import { FooterComponent } from './EmploDuTemps/footer/footer.component';
import { GestionEmploiComponent } from './EmploDuTemps/gestion-emploi/gestion-emploi.component';
import { HeaderComponent } from './EmploDuTemps/header/header.component';
import { MatiereComponent } from './EmploDuTemps/matiere/matiere.component';
import { SideBarComponent } from './EmploDuTemps/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmploDuTempsComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,


    EnseignantComponent,
    MatiereComponent,
    CoursComponent,
    GestionEmploiComponent,
    SideBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AnneModule,
    ClasseModule,
   

  ],
  providers: [
    EnseignantService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
