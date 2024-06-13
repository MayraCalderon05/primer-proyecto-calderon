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
}
