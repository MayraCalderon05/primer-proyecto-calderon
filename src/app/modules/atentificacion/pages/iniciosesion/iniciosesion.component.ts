import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  //declario la siguiente variable para los usuarios ya registrados y almacenarlos en un arreglo
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
    /*en la constante usuario se va aguardar la informacion encontrada, en el arreglo lo que hace con la funcion find
    es:
    -Primero para cada objeto del arreglo se le asigna la variable user
    -Esta variable compara la variable almacenada en el arreglo con los objetos y en este caso el email y la contraseña que ingresa el usuario desde la vista*/
    const usuario = this.sesionUsuarios.find((user)=> user.email === this.usuarioIngresa.email && user.password === this.usuarioIngresa.password);
    //La condicional se ejecuta en caso de que encuentre un usuario que cumpla correctamente con los datos
    if (usuario) {
      //En caso de que sea verdadero, manda un alerta de bienvenido y en caso de que no, marca el alerta de
      alert(`Bienvenidx, ${usuario.nombre}, ha iniciado sesion correctamente`)
      this.usuarioIngresa.email='';
      this.usuarioIngresa.password='';
    } else {
      //en caso de que sea falso, alerta que no se ha podido iniciar sesion y borra el campo de la contraseña
      alert("No se ha podido iniciar sesion")
      this.usuarioIngresa.password='';
    }
  }
}

