import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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

  onNewPersonaje(personaje: Personaje):void{
    this.personajes.push(personaje);
  }

  onDeletePersonsaje( posicion:number):void{
    this.personajes.splice(posicion,1);
  }
}
