import { Component } from '@angular/core';
import { CompteBancaire } from '../core/models/CompteBancaire';
import { ComptebancaireService } from '../comptebancaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-comptebancaire',
  templateUrl: './list-comptebancaire.component.html',
  styleUrls: ['./list-comptebancaire.component.css']
})
export class ListComptebancaireComponent {

  comptes!:CompteBancaire[];


  i:number=0


   constructor(private comptebancaireService: ComptebancaireService,private router:Router) 
   { }


  ngOnInit()
  {
    this.comptebancaireService.getAllCompteBancaire().subscribe(
      data => {
        this.comptes = data;
        console.log(this.comptes)
      },
      error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    )
  }



  voirDetails(id:any)
  {
    id=Number(id)
    this.router.navigate(['detailscomptebancaire',id])
  }

  supprimerCompte(id:any)
  {
    id=Number(id)
    

  }

  

  



}
