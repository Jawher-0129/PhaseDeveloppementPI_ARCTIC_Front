import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompteBancaireComponent } from './add-compte-bancaire/add-compte-bancaire.component';
import { ListComptebancaireComponent } from './list-comptebancaire/list-comptebancaire.component';
import { DetailscomptebancaireComponent } from './detailscomptebancaire/detailscomptebancaire.component';

const routes: Routes = [
  { path: 'addcomptebancaire', component: AddCompteBancaireComponent },
  {path:'listcomptebancaire',component:ListComptebancaireComponent},
  {path:'detailscomptebancaire/:id',component:DetailscomptebancaireComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
