import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {


  //creamos la coleccion de productos de tipo Producto como un arreglo
  coleccionProductos: Producto[] = []

  // Variable para manejar el estado de Edición y Eliminación de productos
  modalVisibleProducto: boolean = false;

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto; // <- recibe valores vacíos
  /*
  atributos alfanumericos string se inicializan vacios
  atributos numericos number se inicializan en 0
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    //subscribe notifica constantemente los cambios actuales del sistenmas
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      //guarda la informacion recibida como un nuevi 'producto' a la coleccion
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      //validamos los valores del producto agregado
      let nuevoProducto: Producto = {
        idProducto: '', //este es generado por la base de datos, por eso no se toma
        //el resto es tomado por la informacion que agrega el usuario
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        img: this.producto.value.img!,
        alt: this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxito")
        })
        .catch(error => {
          alert("Ha habido un error al agregar un nuevo producto")
        })
    }
  }

  //! funcion para alertar al usuario del producto que desea borrar
  mostrarBorrar(productoSeleccionado: Producto){
    //booleano que abre el modal
    this.modalVisibleProducto = true;
    //toma los valores del producto elegido
    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert('El producto se ha eliminado correctamente')
    })
    .catch(error =>{
      alert('No se ha podido eliminar el producto'+error);
    });
  }
}
