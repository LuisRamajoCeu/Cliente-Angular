import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Componentes');

  nombre:string = 'Luis';
  nota:string = '8';

  nombreInput: string = '';
  notaInput:string = '';

cambiarNombre() {
  this.nombre = this.nombreInput;
}

cambiarNota() {
  this.nota = this.notaInput;
}

cambiarNombreDesdeHijo(nombreHijo:string) {
  this.nombre = nombreHijo;
}
cambiarNotaeDesdeHijo(notaHijo:string) {
  this.nota = notaHijo;
}


}
