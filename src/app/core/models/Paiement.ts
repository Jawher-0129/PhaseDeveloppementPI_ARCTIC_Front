import { Reservation } from "./Reservation";
import { User } from "./User";

export class Paiement {
    idPaiement: number;
    mode: string;
    montant: number;
    date: string; 
    reservations: Reservation[];
    user: User;
  
    constructor(
      idPaiement: number,
      mode: string,
      montant: number,
      date: string,
      reservations: Reservation[],
      user: User
    ) {
      this.idPaiement = idPaiement;
      this.mode = mode;
      this.montant = montant;
      this.date = date;
      this.reservations = reservations;
      this.user = user;
    }
  }
  