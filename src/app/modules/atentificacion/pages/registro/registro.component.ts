import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
//importa la interfaz de usuario
import { Usuario } from 'src/app/models/usuario';

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

  //funcion para el registro
  registrar(){
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
    /*console.log(credenciales);
    console.log(this.coleccionUsuarios)*/

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
