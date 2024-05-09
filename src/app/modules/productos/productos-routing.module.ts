import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ProductoComponent } from './pages/producto/producto.component';
//llamammos las rutas hijas
const routes: Routes = [
  {path:"producto", component:ProductoComponent},
  {path:"herramientas",component:HerramientasComponent},
  {path:"plantas",component:PlantasComponent},
  {path:"recursos",component:RecursosComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
