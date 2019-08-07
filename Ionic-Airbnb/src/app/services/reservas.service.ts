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
  

  constructor( public http: HttpClient ) {}

  // Pega todas as reservas 
  

  // Cria as reservas
  

  // Deleta as reservas
  

}
