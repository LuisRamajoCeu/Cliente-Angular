import { Component } from '@angular/core';
import { Personaje } from '../model/Personaje';
import { Anillos } from '../services/anillos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-personaje',
  imports: [FormsModule],
  templateUrl: './add-personaje.html',
  styleUrl: './add-personaje.css',
})
export class AddPersonaje {
  nuevoPersonaje: Personaje = { id: 0, nombre: '', raza: '' };

  constructor(private anillosService: Anillos) {}

  agregarPersonaje(): void {
    if (this.nuevoPersonaje.nombre && this.nuevoPersonaje.raza) {
      this.nuevoPersonaje.id = this.anillosService.getPersonajes().length + 1;
      this.anillosService.agregarPersonaje(this.nuevoPersonaje);
      this.nuevoPersonaje = { id: 0, nombre: '', raza: '' };
    }
  }

}
