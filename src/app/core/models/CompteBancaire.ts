import { User } from "./User";

export class CompteBancaire {
    idCompteBancaire?: number;
    montant!: number;
    user!: User;

    constructor(idCompteBancaire: number, montant: number, user: User) {
      this.idCompteBancaire = idCompteBancaire;
      this.montant = montant;
      this.user = user;
    }
}