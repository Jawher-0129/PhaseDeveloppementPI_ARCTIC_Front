import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComptebancaireService } from '../comptebancaire.service';
import { CompteBancaire } from '../core/models/CompteBancaire';
import { User } from '../core/models/User';

@Component({
  selector: 'app-add-compte-bancaire',
  templateUrl: './add-compte-bancaire.component.html',
  styleUrls: ['./add-compte-bancaire.component.css']
})
export class AddCompteBancaireComponent {


  comptebancaireForm!:FormGroup

  comptebancaire!:CompteBancaire
  users: User[] = []; 

  
  constructor( private comptebancaireService: ComptebancaireService) {
  }

  ngOnInit(): void {
    this.comptebancaireForm = new FormGroup({
      montant: new FormControl('', [Validators.required, Validators.min(0)]),
      userId: new FormControl('', [Validators.required])
    });
  
   
    this.comptebancaireService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users)
      },
      (error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    );
  }


  ajouter() {
    const compteData: CompteBancaire = {
      idCompteBancaire: undefined, 
      montant: this.comptebancaireForm.value.montant,
      user: { id_User: this.comptebancaireForm.value.userId } as User
    };
  
    console.log(compteData);
  
    this.comptebancaireService.addCompteBancaire(compteData).subscribe(
      (data) => {
        console.log("Compte bancaire ajouté avec succès :", data);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du compte bancaire :", error);
      }
    );
  }
  





}


 

  

 






















