import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticuloModel } from '../model/articuloModel';

@Component({
  selector: 'app-listado-articulos',
  imports: [CommonModule],
  templateUrl: './listado-articulos.html',
  styleUrl: './listado-articulos.css',
})
export class ListadoArticulos {
  @Input({ required: true }) articulos!: ArticuloModel[]; 

}
