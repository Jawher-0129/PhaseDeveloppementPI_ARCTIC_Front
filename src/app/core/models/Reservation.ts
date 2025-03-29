import { Course } from "./Course";
import { Paiement } from "./Paiement";
import { User } from "./User";

export class Reservation{
  idReservation?: number; 
  date?: string;           
  status?: number;
  comments!: string;
  courseId!: Course;
  user!: User;
  paiement!: Paiement;

}