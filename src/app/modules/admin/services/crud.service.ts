import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos la coleccion para los produtos de la web del ripo product
  private productosCollection:AngularFirestoreCollection<Producto>

  constructor(private database:AngularFirestore) {
    //* referenciamos coleccion productos y sera subida como producto a firebase
    this.productosCollection = database.collection('producto');
  }

  crearProducto(producto:Producto){
    return new Promise(async(resolve,reject)=> {
      try {
        //creamos un id para el producto de la base de datos
        const idProducto = this.database.createId();
        //TODO le asignamos el id a atributo id producto al atributo id del Producto
        producto.idProducto = idProducto;
        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        //TODO capturamos el resultado en una promesa resuelta
        resolve(resultado);
      }catch(error){
        //recibe un parametro de error y lo almacena en la funcion de reject en caso de que el resultado
        //de la promesa sea negativo
        reject(error);
      }
    })
  }
  editarProducto(){}

}