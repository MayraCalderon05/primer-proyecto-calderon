import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*importecion a las vistas de autentificacion solo que me comi la u entonces es atentificacion*/
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

const routes: Routes = [
  {path:'registro',component:RegistroComponent},
  {path:'iniciosesion',component:IniciosesionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtentificacionRoutingModule { }
