import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/atentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true; //variable booleana para el boton de registro e inicio de sesion
  deslogueado = false; //variable booleana para el botón de cierre de sesión

  //TODO el constructor siempre va después de las variables
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  iniciarSesion(){ //! oculta los primeros dos botones y muestra el ultimo
    this.logueado = false;
    this.deslogueado = true;
  }
  cerrarSesion(){ //! vuelve a mostrar los primeros dos botones y desaparece el ultimo
    this.deslogueado = false;
    //va a eliminar el token actual del usuario
    //token: estado actual del usuario en el navegador para mentener la sesion abierta
    this.servicioAuth.cerrarsesion();
    //! redirigimos a la raíz de la página
    this.servicioRutas.navigate(['/']);
    this.logueado = true;
  }

}
