import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;

  //importacion del modelo/interfaz de los datos necesarios
  usuarioIngresa: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //coleccion de cuentas predeterminadas
  sesionUsuarios: Usuario[] = [
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

  iniciarSesion(){
    
  }
}
