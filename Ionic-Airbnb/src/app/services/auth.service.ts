import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // A URL da API
  apiUrl: string = "http://localhost:8000/api/";
  
  // As headers da requisição

  // Construtor
  constructor( public http: HttpClient ) {}

  // Registro de usuário
  
  // Login de usuário
  
  // Logout do usuário
  

}
