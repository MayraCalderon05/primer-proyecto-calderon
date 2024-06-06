import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  //la variable de sesionUsarios es una implementación de la interfaz Usuario


  //importacion del modelo/interfaz de los datos, guardaría los datos que ingresasen
  usuarioIngresa: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //coleccion de cuentas predeterminadas locales

  public sesionUsuarios: Usuario[] = [
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
    }
  ]


  //en la función iniciar sesion tiene un evento de tipo onClick
  iniciarSesion() {
    const user = this.sesionUsuarios.find(u => u.email === this.usuarioIngresa.email && u.password === this.usuarioIngresa.password);
    if (user) {
      alert("Ha iniciado sesión de manera exitosa")
    } else{
      ("Los datos son incorrectos")
    }
    //este for recorre el arreglo de la coleccion de usuarios ya predeterminada
    /* for (let i = 0; i < this.sesionUsuarios.length; i++) {
       //este condicional verifica que se encuentre una coincidencia en el objeto en el arreglo
       if ((this.usuarioIngresa.email === this.sesionUsuarios[i].email) && (this.usuarioIngresa.password === this.sesionUsuarios[i].password)) {
         alert("Usted ha iniciado sesión")
         break
       } else {
         alert("Los datos son incorrectos")
       }
     }*/
    /*Estoy tratando de resolver un problema que es el que sigue verificando el arreglo y da las tres vueltas por mas
    que haya un break*/
  }
}
