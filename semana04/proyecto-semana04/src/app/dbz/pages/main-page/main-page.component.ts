import { Component } from '@angular/core';
import { ListarComponent } from '../../components/listar/listar.component';
import { AgregarPersonajeComponent } from '../../components/agregar-personaje/agregar-personaje.component';

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

}
