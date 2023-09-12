import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mobilite } from '../models/mobilite';
import { Observable } from 'rxjs';
import { Coordonne } from '../models/coordonne';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = "http://localhost:1888";
  constructor(private httpClient: HttpClient) { }


  ajouterMobilite(mobilite: Mobilite,  idUser: number): Observable<any> {
    return this.httpClient.put<Mobilite>(this.baseUrl + `/api/v1/public/AjouterMobilite?idUser=${idUser}`, mobilite);
  }

  gestmobilite(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/api/v1/public/AfficherMobilite")
  }

  ajouterCoordonne(coordonne: Coordonne, idMob: number, idUser: number): Observable<any> {
    return this.httpClient.put<Coordonne>(this.baseUrl + `/api/v1/public/Ajouterrcoordonner?idMob=${idMob}&idUser=${idUser}`, coordonne);
  }

  getCoordonneeByMobilite(idMob: number): Observable<Coordonne[]> {
    const url = `${this.baseUrl}/api/v1/public/afficherCordonneeMobilite?idMob=${idMob}`;
    return this.httpClient.get<Coordonne[]>(url);
  }

  ajouterUser(user :User): Observable<any> {
    return this.httpClient.post<User>(this.baseUrl + `/api/v1/auth/register`, user);
  }

  userConnect(user: User): Observable<any> {
    return this.httpClient.post<User>(this.baseUrl + `/api/v1/auth/authenticate`, user);
  }

  userDisonnect(): Observable<any> {
    return this.httpClient.post(this.baseUrl + `/api/v1/auth/logout`,{});
  }

  deletMobilite(idMobilite:any) : Observable<any>{

    return this.httpClient.delete(this.baseUrl + `/api/v1/public/deletMobilite?idMob=${idMobilite}`)
  }



}
