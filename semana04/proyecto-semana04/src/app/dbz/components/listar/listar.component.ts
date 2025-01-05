import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  @Input()
  public personajeLista: Personaje[] = [
    {
      nombre: 'Black Freezer',
      poder: 250
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onEliminarPersonaje(id?: string):void{
    //console.log('posicion del personaje: ' +  posicion);
    if(!id) return;
    this.onDelete.emit(id);
  }

  //TAREA 01 - 2 PUNTOS ADICIONALES MAS (10 minutos) 11:05

}
