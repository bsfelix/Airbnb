import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: FormGroup;

  constructor( public formbuilder: FormBuilder, public authService: AuthService, public router: Router ) {

  	this.loginForm = this.formbuilder.group({
  		email: ['', [Validators.required]],
  		password: ['', [Validators.required]],
  	});

  }

  // Função disparada quando clicarmos no botão de login
  loginUsuario( loginForm ) {

  	// Se o form for válido
  	if ( loginForm.status == "VALID" ) {

  		// Falamos pra service mandar os dados do form
  		this.authService.logarUsuario( loginForm.value ).subscribe(
  			// E quando recebermos uma resposta
  			(res) => {
  				// Mostramos a mensagem no console
  				console.log( res.message );
  				// Salvamos o token na localStorage
  				localStorage.setItem( 'userToken', res.data.token );
  				// Navegamos pra rota antes bloqueada (será que agora vai?)
  				this.router.navigate(['reservas']);
  			}
  		);

  	}

  }


}
