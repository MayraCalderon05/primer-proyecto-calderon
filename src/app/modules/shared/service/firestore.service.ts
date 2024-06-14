import { Injectable } from '@angular/core';
//accedemos al sistema de colecciones para crearlas y subirlas
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//la idea es que respete la siguiente interfaz
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /* definimos una coleccion de usuarios PRIVADA ya que la informacion de los usuarios es sensible
  <que respete el modelo de esta interfaz> = eso significan las cositas - referencian a la interfaz */
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id:string){
    /*generamos una promesa PURA (promete devolver un valor) y utiliza los métodos:
    RESOLVE: promesa resuelta: funciona correctamente
    REJECT: ocurrio alguna falla*/
    return new Promise(async (resolve, reject)=>{
      /* encapsula la promesa resuelta (bloque TRY) 
        TRY Y CATCH solo se usan en servicios*/
      try {
        usuario.uid = id;
        /* coleccionUsuarios envia como documento el uid y setea la informacion
        qu ingresemos en el registro */
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
       //el bloque catch encapsulta un nuevo error en caso de que la promesa se rechace
       //en caso de error
      } catch(error){
        reject (error);
      }
    })
  }
}
