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
    this.reservasService.pegarReservas().subscribe( (res) => {
      console.log( res.message );
      this.reservas = res.data;
    });
  }

  ionViewWillLeave () {
    this.reservas = [];
  }

  logout() {
    this.authService.deslogarUsuario().subscribe(
      (res) => {
        console.log( res.message );
        localStorage.removeItem( 'userToken' )
        localStorage.removeItem( 'userLogged' );
        this.router.navigate(['home']);
      }
    );
  }

  select( i ) {
    this.selectedCard = i;
  }

  delete(i) {
    this.canDelete = false;
    this.reservasService.deletarReserva( this.reservas[i].id ).subscribe( (res) => {
      this.canDelete = true;
      this.reservas.splice( i, 1 );
      this.selectedCard = -1;
      console.log( res.message )
    });
  }

  new() {

    this.canDelete = false;
    
    this.reservasService.criarReserva( "Reserva", '2019-10-10 10:00:00' ).subscribe( (res) => {
      console.log( res.message );
      this.reservas.push( res.data );
    });

  }

}
