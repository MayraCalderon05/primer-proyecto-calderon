import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';

import { PlantasComponent } from './pages/plantas/plantas.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';


@NgModule({
  declarations: [
    PlantasComponent,
    HerramientasComponent,
    RecursosComponent,
    ProductoComponent,
    CardsComponent,
    CardJuguetesComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    PlantasComponent,
    HerramientasComponent,
    RecursosComponent,
    ProductoComponent,
    CardsComponent,
    CardJuguetesComponent
  ]
})
export class ProductosModule { }
