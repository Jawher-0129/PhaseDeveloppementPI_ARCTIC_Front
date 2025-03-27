import { Component } from '@angular/core';
import { ComptebancaireService } from '../comptebancaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteBancaire } from '../core/models/CompteBancaire';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/User';

@Component({
  selector: 'app-updatecomptebancaire',
  templateUrl: './updatecomptebancaire.component.html',
  styleUrls: ['./updatecomptebancaire.component.css']
})
export class UpdatecomptebancaireComponent {

  id!:number
  compte!:CompteBancaire
   comptebancaireForm!:FormGroup

   users!:User[]


  constructor(private comptebancaireService: ComptebancaireService,private router:Router,private route:ActivatedRoute){}

  
 

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
    
      // Initialiser le formulaire pour éviter l'erreur NG01052
      this.comptebancaireForm = new FormGroup({
        montant: new FormControl('', [Validators.required, Validators.min(0)]),
        userId: new FormControl('', [Validators.required])
      });
    
      // Récupérer le compte bancaire par ID
      this.comptebancaireService.getCompteBancaireById(this.id).subscribe(
        data => {
          this.compte = data;
    
          // Récupérer la liste des utilisateurs
          this.comptebancaireService.getUsers().subscribe(
            usersData => {
              this.users = usersData;
    
              // Mettre à jour le formulaire avec les valeurs récupérées
              this.comptebancaireForm.patchValue({
                montant: this.compte.montant,
                userId: this.compte.user.id_User
              });
            },
            err => {
              console.error('Erreur lors de la récupération des utilisateurs', err);
            }
          );
        },
        err => {
          console.log('Erreur lors de la récupération du compte bancaire', err);
        }
      );
    }


   

    update() {
      if (this.comptebancaireForm.valid) {
        // Crée un objet avec toutes les données nécessaires
        const updatedCompte = {
          idCompteBancaire: this.id, // Ajoute l'ID du compte à modifier
          montant: this.comptebancaireForm.value.montant,
          user: { 
            id_User: this.comptebancaireForm.value.userId 
          }
        };
    
        this.comptebancaireService.updateCompteBancaire(updatedCompte).subscribe(
          data => {
            console.log('Compte mis à jour avec succès', data);
            this.router.navigate(['listcomptebancaire']);
          },
          err => {
            console.error('Erreur lors de la mise à jour du compte', err);
          }
        );
      }
    }



}
