import { Component } from '@angular/core';
//importa la interfaz de usuario
import { Usuario } from 'src/app/models/usuario';
//importar nuestro servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//importamos el servicio de firestore que vincula el uid con las conlecciones
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
//Servicio de rutas que otorga angular, metodo de navegacion
import { Router } from '@angular/router';
//importa todo de esta librería
import * as CryptoJS from 'crypto-js';

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
  constructor(public servicioAuth:AuthService, 
              public servicioRutas:Router, 
              public servicioFirestore:FirestoreService){

  }

  //funcion para el registro
  //async = asincrónico: alude a lo que coincide en el tiempo
  async registrar(){
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
    const uid = await this.servicioAuth.obtenerUid();
    //le envia el uid que le está enviando desde el servicio auth
    this.usuarios.uid = uid;
    //sha256 es un algoritmo de hashing que toma una entrada en este caso la contraseña y produce una 
    // cadena de caracteres en lenguaje exadecimal que representa su HASH
    //el toostring convierte el resultado del hash en una cadena de carácteres legible
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();
    //guarda la informacion del usuario en la colección
    this.guardarUsuario();
    /*NOTA: el metodo then funciona en caso deque salga bien y el metodo catch en caso d que no funcione*/
    //llamamos a la funcion para vaciar el formulario
    this.limpiarInputs();
  }
  //funcion para agregar un nuevo usuario
  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    /* THEN y CATCH se usan unicamente en componentes */
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(err => {
      console.log('Error =>',err);
    })
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
