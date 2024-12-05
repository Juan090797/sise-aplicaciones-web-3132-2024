import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListarComponent } from "./heroes/listar/listar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    HeroeComponent,
    ListarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public titulo: String = 'Mi Primera Pagina con Angular';

}
