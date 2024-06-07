import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  sesionUsuarios: Usuario[]

  //importacion del modelo/interfaz de los datos necesarios
  public usuarioIngresa: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //coleccion de cuentas predeterminadas
  constructor() {
    this.sesionUsuarios = [
      {
        uid: '',
        nombre: 'oreo',
        apellido: 'galleta',
        email: 'oreog@gmail.com',
        rol: 'admin',
        password: 'oreo1234'
      },
      {
        uid: '',
        nombre: 'acer',
        apellido: 'computadora',
        email: 'compuacer@gmail.com',
        rol: 'admin',
        password: '1234acer'
      },
      {
        uid: '',
        nombre: 'donsatur',
        apellido: 'bizcochitos',
        email: 'donbizcocho@gmail.com',
        rol: 'visit',
        password: 'bizcochito000'
      },
    ]
  }

  /*iniciarSesion() {
    //las credenciales son todo lo que el usuario envia desde el formulario
    const credenciales = {
      email: this.usuarioIngresa.email,
      password: this.usuarioIngresa.password
    }
    //recorre el arreglo de sesionUsuarios
    for (let i = 0; i < this.sesionUsuarios.length; i++) {
      const usuarioLocal = this.sesionUsuarios[i];
      //compara uno por uno los atributos de un objeto local con lo que ingresa del usuario
      if (usuarioLocal.email === credenciales.email && usuarioLocal.password === credenciales.password) {
        alert("iniciaste sesión correctamente")
        //frenamos el bucle
      } else {
        alert("no se pudo iniciar sesion")
      }
      //el problema de esta solucion es que repite el arreglo por cada usuario en el arreglo
    }
  }*/

  //en la función iniciar sesion tiene un evento de tipo onClick
  iniciarSesion() {
    const user = this.sesionUsuarios.find((u) => u.email === this.usuarioIngresa.email && u.password === this.usuarioIngresa.password);
    if (user) {
      alert("Ha iniciado sesión de manera exitosa")
    } else{
      ("Los datos son incorrectos")
    }
  }
}
