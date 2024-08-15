import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-juguetes',
  templateUrl: './card-juguetes.component.html',
  styleUrls: ['./card-juguetes.component.css']
})
export class CardJuguetesComponent {
  coleccionProductos: Producto[]=[];
  coleccionJuguetes: Producto[] = [];
  productoSeleccionado!:Producto;
  modalVisible: boolean = false;
  constructor(public servicioCrud:CrudService){}
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
    //mostrar coleccion actual de juguetes
  }

  mostrarJuguetes(){
    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "Con flores y semillas") {
        this.coleccionJuguetes.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }
}
