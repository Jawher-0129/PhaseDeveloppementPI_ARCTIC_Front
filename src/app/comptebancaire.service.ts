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

  getAllCompteBancaire(){
    return this.http.get(this.url+"/getcomptebancaire");
  }

  addCompteBancaire(compteBancaire:CompteBancaire){
    return this.http.post(this.url+"/addcomptebancaire",compteBancaire);
  }

  getUsers() :Observable<User[]>
  {
    return this.http.get<User[]>("http://localhost:8089/skillswap/api/users");
  }




}
