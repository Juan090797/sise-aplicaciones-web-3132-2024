import { Component } from '@angular/core';
import { ListarComponent } from '../../components/listar/listar.component';
import { AgregarPersonajeComponent } from '../../components/agregar-personaje/agregar-personaje.component';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

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

  constructor( private dbzService: DbzService){}

  get personajes(): Personaje[]{
    return [...this.dbzService.personajes]
  }

  onDeletePersonaje (id:string):void{
    this.dbzService.onDeletePersonsaje(id);
  }

  onNewPersonaje (personaje: Personaje): void {
    this.dbzService.onNewPersonaje(personaje);
  }


}
