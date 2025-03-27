export enum Role {
    ETUDIANT = 'ETUDIANT',
    ADMIN = 'ADMIN',
    PROFESSOR = 'PROFESSOR'
  }
  export interface Reservation {
    id: number;
    date: Date;
    status: string;
  }
  
  export interface CompteBancaire {
    id: number;
    montant: number;
  }
  
  export interface Paiement {
    id: number;
    montant: number;
    datePaiement: Date;
  }
  
  export interface User {
    id_User: number;
    first_name: string;
    last_Name: string;
    date_Birthday: Date;
    gender: string;
    address: string;
    email: string;
    password: string;
    role: Role;
    photo: string;
    phone_Number: string;
    is_Activated: boolean;
    created_At: Date;
    reservations?: Reservation[];
    compteBancaire?: CompteBancaire;
    paiement?: Paiement;
  }
  