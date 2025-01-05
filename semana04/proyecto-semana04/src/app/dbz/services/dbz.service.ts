import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] = [
    {
      //index : 0
      id: uuid(),
      nombre: 'Krilin',
      poder: 100
    },
    {
      //index : 1
      id: uuid(),
      nombre: 'Goku',
      poder: 1000
    },
    {
      //index : 2
      id: uuid(),
      nombre: 'Yancha',
      poder: 150
    },
    {
      //index : 3
      id: uuid(),
      nombre: 'Jiren',
      poder: 1500
    },
  ];

  onNewPersonaje(personaje: Personaje):void{

    // const newPersonaje:Personaje = {
    //   id: uuid(),
    //   nombre,
    //   poder
    // }
    const newPersonaje:Personaje = {id: uuid(), ...personaje}
    this.personajes.push(newPersonaje);
  }

  // onDeletePersonsaje( posicion:number):void{
  //   this.personajes.splice(posicion,1);
  // }

  onDeletePersonsaje( id:string):void{
    this.personajes = this.personajes.filter( personaje => personaje.id !== id);
  }
}
