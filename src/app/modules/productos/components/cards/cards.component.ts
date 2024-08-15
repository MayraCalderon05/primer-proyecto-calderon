import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  //definimos la coleccion
  coleccionProductos: Producto[] = [];

  produtoSeleccionado!:Producto;

  //variable para manejar el estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  //! el ngoninit es una funcion que se utiliza para que se ejecute cuando inicialice el sitio web
  ngOnInit(): void{
    //!el metodo subcribe notifica los cambios que se van realizando
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
    //funcion para modal que muestre la informacion d eun producto en especifico
  mostrarVer(info: Producto){
    this.modalVisible = true;
    this.produtoSeleccionado = info;
  }
}
