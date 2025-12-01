import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Persona } from './model/persona';
import { Articulo } from "./articulo/articulo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Articulo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'Alta de usuario';
  morado:string = "morado";
  mensaje:string = '';
  alta:boolean = false;
  nombre:string = '';
  apellidos:string = '';
  agregarUsuario(): void {
    this.alta = true;
  }
  personas: Persona[] = [
  {
      nombre: 'Sofía',
      apellidos: 'Ramírez López',
      edad: 28
    },
    {
      nombre: 'Javier',
      apellidos: 'Martínez Soto',
      edad: 45
    },
    {
      nombre: 'Elena',
      apellidos: 'García Pérez',
      edad: 19
    }];
    opcion:string = '';
    marcar(event:any){
      this.opcion = event.target.innerHTML;
    }

}
