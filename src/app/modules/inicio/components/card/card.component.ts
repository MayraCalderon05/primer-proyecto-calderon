import { Component } from '@angular/core';
/*Exporto la interfaz que cree desde la consola*/ 
import { Planta } from 'src/app/models/planta';

@Component({
  selector: 'app-card', /*en esta parte te dice comno llamamos a este componente desde otros*/
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  /*PROPIEDAD PUBLICA: tipo de array*/
  public info: Planta[];
  constructor(){
    this.info = [
      {
        nombre_cientifico:"Dianthus Pink Kisses",
        nombre:"Drácena",
        descripcion:"De porte elegante, la drácena (su nombre científico es Dracaena) es un buen aliado en casa porque además de decorar, filtra los gases contaminantes del aire. Es una planta de follaje fino y, según la variedad, las hojas están matizadas en distintos colores.",
        color:"Verde",
        frutos:false,
        flores:false,
        imagen:"https://imgs.search.brave.com/yV6u21LCSIWpFdYmur5SuhmgJfWhPsQ6nhSwGZQGIAs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmVsbXVlYmxl/LmNvbS9tZWRpby8y/MDE5LzAzLzI1L2Ry/YWNlbmFfMDg3Y2Ux/OTVfODAweDgwMC5q/cGc",
        alt:"Tipo de planta de interior"
      },
      {
        nombre_cientifico:"Chlorophytum comosum",
        nombre:"Cinta o malamadre",
        descripcion:"Se caracterizan por sus hojas alargadas y muy luminosas. Se las conoce también como malamadre, araña o lazo de amor. Agradecen la humedad, siendo una muy buena opción para decorar una repisa del baño o incluso de la cocina.",
        color:"Verde",
        frutos:false,
        flores:true,
        imagen:"https://content.elmueble.com/medio/2019/03/27/dianthus-lillipot-m16-1a10006473_f3ec5e18_600x600.jpg",
        alt:"Tipo de planta de interior"
      },
      {
        nombre_cientifico:"Dianthus caryophyllus",
        nombre:"Clavel",
        descripcion:"Son un clásico para llenar de flores y color los balcones. Se trata de plantas que precisan pocos cuidados, pero no toleran las bajas temperaturas. De hecho, para su buen crecimiento agradecen estar a pleno sol y con temperaturas entre los 10 y los 24 grados. Su floración es multicolor, ya que presentan muchos colores, y puede durar todo el año.",
        color:"Rojo y anaranjado",
        frutos:false,
        flores:false,
        imagen:"https://content.elmueble.com/medio/2019/03/25/croton_6fe3c7b7_800x800.jpg",
        alt:"Tipo de planta de interior"
      }
    ]
  }
}