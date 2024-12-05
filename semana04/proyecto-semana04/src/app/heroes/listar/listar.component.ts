import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-listar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  //ARRAY DE STRINGS
  //PUBLIC LISTASTRINGS : STRING[]  =['NOMBRE1', 'NOMBRE2', 'NOMBRE3'];

  //ARRAY DE NUMBERS
  //PUBLIC LISTANUMBERS : STRING[]  =[1, 2, 3];


//CREAR UN ARRAY DE STRING CON HEROES

  public heroes: string[] =
  ['Spiderman', 'Iroman', 'Hulk', 'Superman',
    'Batman', 'Capitan America'];

    borrarUltimo():void{
      this.heroes.pop()
    }

}
