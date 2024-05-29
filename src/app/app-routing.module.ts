import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
// import { ProductosModule } from './modules/productos/productos.module';

const routes: Routes = [
  //ruta simple que nos lleva a un solo componente
  {path:"",component:InicioComponent},
  //carga peresoza que te lleva a un modulo.  Cada modulo se encarga de sus rutas hijas
  //Ruta hija indica: loadchildren.
  //then =  promesas=funciones asincronicas (espera la confirmacion de internet o del exterior)
  //si hay error o no algo te va a devolver
  //()=> nos importa la ruta de donde viene el modulo
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)},
  {path:"",loadChildren:()=>import('./modules/atentificacion/atentificacion.module').then(m=>m.AtentificacionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
