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
  /*
  atributos alfanumericos string se inicializan vacios
  atributos numericos number se inicializan en 0
  */
  coleccionProductos: Producto[] = []
  producto = new FormGroup({
    nombre:new FormControl('', Validators.required),
    precio:new FormControl(0,Validators.required),
    descripcion:new FormControl('',Validators.required),
    categoria:new FormControl('',Validators.required),
    img:new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required)
  })
  
  constructor(public servicioCrud:CrudService){ }
}
