import { AnneeScolaire } from "../../annee-scolaire/model/annee-scolaire";
import { Classe } from "../../classe/model/classe";
import { Enseignant } from "../../enseignant/model/enseignant";
import { EmploiDuTemps } from "../../gestion-emploi/model/emploi-du-temps";
import { Matiere } from "../../matiere/model/matiere";

export class Cours {
  id:number;
  code:String;

  intitule:String;
  classe:Classe;
  emploiDuTemps:EmploiDuTemps;
  enseignant:Enseignant;
  anneeScolaire:AnneeScolaire;
  matiere:Matiere;

  constructor(){
    this.id=0.0;
    this.code="";
    this.intitule=""
    this.anneeScolaire=new AnneeScolaire();
    this.classe=new Classe()
    this.emploiDuTemps=new EmploiDuTemps();
    this.enseignant=new Enseignant()
    this.matiere=new Matiere()
  }
}
