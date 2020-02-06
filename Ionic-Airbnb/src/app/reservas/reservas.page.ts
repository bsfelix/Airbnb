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

  // Equivalente ao ngOnInit
  ionViewDidEnter () {
    // Pega as reservas
    this.reservasService.pegarReservas().subscribe(
      (res) => {
      console.log( res['message']);
      this.reservas = res['data'];
      }
    );
  }

  ionViewWillLeave () {
    // Apaga as reservas armazenadas
    this.reservas = [];
  }

  // Função logout
  logout() {
    this.authService.vaiEmboraLek().subscribe(
      (res) => {
        console.log( res['message'] );
        localStorage.removeItem('userToken');
        this.router.navigate(['home']);
      }
    );
  }

  select( i ) {
    this.selectedCard = i;
  }

  // Função deletar reserva
  delete( i ) {
    this.reservasService.deletarReserva( this.reservas[i].id ).subscribe(
      (res) => {
        
        console.log( res['message'] );

        this.reservas.splice( i, 1 );

      }
    );
  }

  // Função adc reserva
  new() {
    this.reservasService.criarReserva( "Reserva muito maneira", "2020-12-31 20:00:00" ).subscribe(
      (res) => {
        console.log( res['message'] );
        this.reservas.push( res['data'] );
      }
    );
  }

}
