import { Component, Input } from '@angular/core';
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

}
