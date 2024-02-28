import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routesApp:Routes=[
  {
    path:'emploi', loadChildren:()=>import('./EmploDuTemps/emplo-du-temps.module').then(m=>m.EmploDuTempsModule)
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routesApp)
  ]
})
export class AppRoutingModule { }
