import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './core/models/Reservation';
import { Observable } from 'rxjs';
import { User } from './core/models/User';
import { Course } from './core/models/Course';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  panier: number=0


  private apiUrl = 'http://localhost:8089/skillswap/reservation';

  constructor(private http: HttpClient) {}

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/add`, reservation);
  }


  getUserById(id:number) :Observable<User>
    {
      return this.http.get<User>("http://localhost:8089/skillswap/api/users/"+id);
    }

    getCourseById(id:number) :Observable<Course>
    {
      return this.http.get<Course>("http://localhost:8089/skillswap/courses/getcourses/"+id);
    }

  
}
