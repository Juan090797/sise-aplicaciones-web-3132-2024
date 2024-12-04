import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-semana04';
  public titulo: String = 'Mi Primera Pagina con Angular';
  public contador: number = 10;

  incrementar():void {
    //this.contador = this.contador +1;
    this.contador += 1;
  }


}
