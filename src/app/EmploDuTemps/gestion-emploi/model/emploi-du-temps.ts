import { Cours } from "../../cours/model/cours";

export class EmploiDuTemps {
  id:number;
  heureDebut:Date;
  heureFin:Date;
  cours:Cours[];

  constructor(){
    this.id=0.0;
    let now = new Date();
    this.heureDebut = new Date(now.setHours(8, 0, 0, 0));
    this.heureFin = new Date(now.setHours(17, 0, 0, 0));
    this.cours=[]
  }

}
