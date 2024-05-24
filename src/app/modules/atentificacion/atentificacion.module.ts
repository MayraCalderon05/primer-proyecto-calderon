import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtentificacionRoutingModule } from './atentificacion-routing.module';
import { AtentificacionComponent } from './atentificacion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
/* Componentes de material */
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AtentificacionComponent,
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AtentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent
  ]
})
export class AtentificacionModule { }
