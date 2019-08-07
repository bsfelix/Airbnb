import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage {

  reservas = [];
  selectedCard = -1;

  canDelete = true;

  constructor( public router: Router, public authService: AuthService, public reservasService: ReservasService ) {}

  ionViewDidEnter () {
    // Pega as reservas
  }

  ionViewWillLeave () {
    // Apaga as reservas armazenadas
    this.reservas = [];
  }

  // Função logout
  logout() {
  }

  select( i ) {
    this.selectedCard = i;
  }

  // Função deletar reserva
  delete(i) {
  }

  // Função adc reserva
  new() {
  }

}
