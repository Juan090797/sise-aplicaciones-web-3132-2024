import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-dbz-personaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})
export class AgregarPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personsaje: Personaje = {
    nombre: '',
    poder: 0
  }


  agregarPersonaje(): void {
    if (this.personsaje.nombre.length === 0) return;
    console.log(this.personsaje);
    this.onNewPersonaje.emit(this.personsaje)
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.personsaje.nombre = '';
    this.personsaje.poder = 0;
  }


}


//Output
//decorador en angular que se usa para emitir eventos desde un componente hijo hacia un componente padre

//this.onNewPersonaje.emit({ ...this.personsaje })
//objeto A = ''
    //objeto B = copia con informacion

//this.onNewPersonaje.emit({...this.personsaje})
//... operador spread , hace una copia del objeto
