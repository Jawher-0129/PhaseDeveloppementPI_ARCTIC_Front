import { Component } from '@angular/core';
import { Reservation } from '../core/models/Reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/User';
import { Course } from '../core/models/Course';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {

  reservationForm!: FormGroup;
  course!: Course;
  panierx!: number;
  user!: User;

  constructor(
    private reservationService: ReservationService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupération de l'utilisateur
    this.reservationService.getUserById(3).subscribe(user => {
      this.user = user;
      console.log(this.user);

      // Récupération du cours avec l'ID = 1
      this.reservationService.getCourseById(1).subscribe(course => {
        this.course = course;
        console.log(this.course); // Vérifiez si le cours a bien été récupéré

        // Initialisation du formulaire avec les données du cours et de l'utilisateur
        this.reservationForm = new FormGroup({
          comments: new FormControl('', [Validators.required]),
          courseId: new FormControl(this.course.id_Course, [Validators.required]),  // Utilisation de `this.course.id`
          user: new FormControl(this.user, [Validators.required]),
        });
      });
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      
      this.reservationService.addReservation(reservation).subscribe(
        (res) => {
          this.reservationService.panier = this.reservationService.panier + 300;
          this.panierx = this.reservationService.panier;

          console.log('Reservation created successfully', res);
        },
        (error) => {
          console.error('Erreur lors de la création de la reservation', error);
        }
      );
    }
  }
}
