import { Component } from '@angular/core';
import { ListarComponent } from '../../components/listar/listar.component';
import { AgregarPersonajeComponent } from '../../components/agregar-personaje/agregar-personaje.component';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ListarComponent,
    AgregarPersonajeComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      //index : 0
      nombre: 'Krilin',
      poder: 100
    },
    {
      //index : 1
      nombre: 'Goku',
      poder: 1000
    },
    {
      //index : 2
      nombre: 'Yancha',
      poder: 150
    },
    {
      //index : 3
      nombre: 'Jiren',
      poder: 1500
    },
  ];


}
