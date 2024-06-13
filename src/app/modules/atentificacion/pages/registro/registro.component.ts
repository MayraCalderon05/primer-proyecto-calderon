import { Component } from '@angular/core';
//importa la interfaz de usuario
import { Usuario } from 'src/app/models/usuario';

//importar nuestro servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//Servicio de rutas que otorga angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;
  
  //importacion del modelo/interfaz
  usuarios: Usuario = {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    password:'',
  }
  //crear una colección para usuarios
  coleccionUsuarios:Usuario[] = [];
  //referenciamos a nuestros servicios
  constructor(public servicioAuth:AuthService, public servicioRutas:Router){

  }

  //funcion para el registro
  //async = asincrónico: 
  async registrar(){
    /* PARA MAÑANA; borrar esta parte
    //credenciales = informacion que el usuario ingresa
    const credenciales = {
      uid:this.usuarios.uid,
      nombre:this.usuarios.nombre,
      apellido:this.usuarios.apellido,
      email:this.usuarios.email,
      rol:this.usuarios.rol,
      password:this.usuarios.password,
    }
    //enviamos los nuevos registros por medio del metodo push a la coleccion
    this.coleccionUsuarios.push(credenciales);
    alert("te registraste correctamente")
    //por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios)
    */
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    //res: resguarda una respuesta
    //await: es el tiempo de espera ya que utiliza internet y va a tardar en su proceso
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    //el metodo then nos devuelve la respuesta esperada por la anterior promesa es decir si funciona correctamente, nos guarda la respuesta
    .then(res => {
      alert("Ha agregado un usuario con éxito")
      //nos lleva a la vista de inicio
      this.servicioRutas.navigate(['/inicio'])
    })
    //encapsula un error
    .catch(error => {
      alert('Hubo un error al registrar el usuario')
    })
    /*NOTA: el metodo then funciona en caso deque salga bien y el metodo catch en caso d que no funcione*/
    //llamamos a la funcion para vaciar el formulario
    this.limpiarInputs();
  }
  
  limpiarInputs(){
    const input = {
      uid:this.usuarios.uid = '',
      nombre:this.usuarios.nombre = '',
      apellido:this.usuarios.apellido ='',
      rol:this.usuarios.rol ='',
      email:this.usuarios.email ='',
      password:this.usuarios.password = '',
    }
  }
}
