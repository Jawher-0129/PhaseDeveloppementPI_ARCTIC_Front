import { Component } from '@angular/core';
import { ComptebancaireService } from '../comptebancaire.service';
import { CompteBancaire } from '../core/models/CompteBancaire';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailscomptebancaire',
  templateUrl: './detailscomptebancaire.component.html',
  styleUrls: ['./detailscomptebancaire.component.css']
})
export class DetailscomptebancaireComponent {

  comptebancaire!:CompteBancaire
  id!:number



  constructor(private comptebancaireService: ComptebancaireService,private route:ActivatedRoute) { }



  ngOnInit(): void {

    this.id=this.route.snapshot.params['id']

    this.comptebancaireService.getCompteBancaireById(this.id).subscribe(
      data => {
        this.comptebancaire = data;
        console.log(this.comptebancaire)
      },
      error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    )
  }

  

  getQRCodeData(comptebancaire: CompteBancaire): string
  {
    return JSON.stringify(comptebancaire);

  }

}
