import { Component, Input } from '@angular/core';
import { ActorModel, PeliculaModel } from '../model/PeliculaModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  @Input() pelicula: PeliculaModel | null = null;
  
}
