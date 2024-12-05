import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

    // SINTAXIS DE INTERPOLACION {{ }}
    //binding *ngIf
    // false, undefined, null, 0

    public nombre: string = 'Superman';
    public edad: number = 100;

    get capitalizarNombre():string {
      return this.nombre.toUpperCase();
    }

    getHeroeDescripcion():string {
      return `${ this.nombre } - ${ this.edad }`;
    }


    cambiarNombre():void{
      this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
      this.edad = 50;
    }

    reset():void {
      this.edad = 100;
      this.nombre ='Superman';
    }


}
