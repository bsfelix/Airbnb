import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  // URL da API
  apiUrl: string = "http://localhost:8000/api/";
  
  // Headers do programa
  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
  }

  constructor( public http: HttpClient ) {}

  // Pega todas as reservas 
  pegarReservas(): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get( this.apiUrl + 'reserva', this.httpHeaders );
  }

  criarReserva( nome: string, data: string ): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post( this.apiUrl + 'reserva', {
      name: nome,
      date: data,
    }, this.httpHeaders );
  }

  deletarReserva( id: number ): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete( this.apiUrl + 'reserva/' + id, this.httpHeaders );
  }

}
