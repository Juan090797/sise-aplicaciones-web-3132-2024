import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public contador: number = 10;

  incrementarEnBase(valor:number):void {
    //this.contador = this.contador +1;
    this.contador += valor;
  }

  reset():void{
    this.contador = 10;
  }

}
