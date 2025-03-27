import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompteBancaireComponent } from './add-compte-bancaire/add-compte-bancaire.component';

const routes: Routes = [
  { path: 'addcomptebancaire', component: AddCompteBancaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
