import { Injectable } from '@angular/core';

//importamos servicio de auntentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
//este decorador es lo que hace referencia a un servicio
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(public auth:AngularFireAuth) { }

  //funcion para tomar UID
  //async se usa cuando vamos a tener un tiempo de espera
  async obtenerUid(){
    //no genera una promesa y captura la constante
    const user = await this.auth.currentUser;
    //si el usuario no respeta la estructura de la interfaz; si tuvo problemas para el registro quizas mal internet
    if(user == null){
      return null;
    } else {
      return user.uid
    }
  }
  /* una promesa tiene dos resultados, resuelta o rechazada*/
  //funcion para el registro
  registrar(email:string, password:string){
    //retorna nueva informacion de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  //funcion para inicio de sesion
  iniciosesion(email:string, password:string){
    //valida el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email,password)
  }
  //funcion para cerrar sesion
  cerrarsesion(){
    //nos devuelve una promesa vacía, es decir, se limpia lo que anteriormente de habia logueado
    return this.auth.signOut();
  }
}
