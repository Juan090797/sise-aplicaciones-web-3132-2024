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
      nombre: 'Krilin',
      poder: 100
    },
    {
      nombre: 'Goku',
      poder: 1000
    },
    {
      nombre: 'Yancha',
      poder: 150
    },
    {
      nombre: 'Jiren',
      poder: 1500
    },
  ];


}
