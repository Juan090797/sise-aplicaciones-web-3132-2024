import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-dbz-personaje',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})
export class AgregarPersonajeComponent {

  public personsaje: Personaje = {
    nombre: '',
    poder: 0
  }


  agregarPersonaje()
  {
    console.log(this.personsaje);
  }


}
