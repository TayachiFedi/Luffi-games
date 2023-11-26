import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

const routes: Routes = [

  {path: 'ajout', component: AjoutComponent},
  {path:'list', component: ListHeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
