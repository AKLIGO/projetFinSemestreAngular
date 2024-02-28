import { Cours } from "../../cours/model/cours";
import { Matiere } from "../../matiere/model/matiere";

export class Enseignant {
  id:number;
  nom:string;
  prenom:string;
  matricule:string;
  telephone:string;
  email:string;
  cours:Cours[];
  matiere:Matiere | null;

  constructor(){
    this.id=0.0;
    this.email="";
    this.matricule="";
    this.nom="";
    this.prenom="";
    this.telephone="";
    this.cours=[];
    this.matiere=null
  }
}
