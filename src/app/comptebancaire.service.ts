import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteBancaire } from './core/models/CompteBancaire';
import { Observable } from 'rxjs';
import { User } from './core/models/User';

@Injectable({
  providedIn: 'root'
})
export class ComptebancaireService {

  private url:string='http://localhost:8089/skillswap/comptebancaire';

  constructor(private http:HttpClient) { }

  getAllCompteBancaire() :Observable<CompteBancaire[]> {
    return this.http.get<CompteBancaire[]>(this.url+"/getcomptebancaire");
  }

  addCompteBancaire(compteBancaire:CompteBancaire){
    return this.http.post(this.url+"/addcomptebancaire",compteBancaire);
  }

  getCompteBancaireById(id:number) :Observable<CompteBancaire> {
    return this.http.get<CompteBancaire>(this.url+"/getcomptebancaire/"+id);
  }

  deleteCompteBancaire(id:number) :Observable<CompteBancaire> {
    return this.http.delete<CompteBancaire>(this.url+"/deletecomptebancaire/"+id);
  }

  getUsers() :Observable<User[]>
  {
    return this.http.get<User[]>("http://localhost:8089/skillswap/api/users");
  }

  




}
