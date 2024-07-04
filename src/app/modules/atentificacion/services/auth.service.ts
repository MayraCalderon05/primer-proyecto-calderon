import { Injectable } from '@angular/core';

//importamos servicio de auntentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

//importacion del servicio de la base de datos
import { AngularFirestore } from '@angular/fire/compat/firestore';
//este decorador es lo que hace referencia a un servicio
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(
    private auth:AngularFireAuth,
    private servicioFirestore:AngularFirestore) { }

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
  //funcion que busca un usuario en la coleccion de usuarios, cuyo correo electronico coincida con el valor proporcionado
  //cuando accede a usuarios, busca una referencia cuyo email busca el email de la coleccion, obtiene el valor
  //una PROMESA es un tipo de funcion asyncronica que nos puede devolver un resultado positivo o negativo(resualto o rechazado)
  obtenerUsuario(email:string){
    //en la comparación el primer email es el email que ingresa el usuario y el segundo email es el que lee de la base de datos
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
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
