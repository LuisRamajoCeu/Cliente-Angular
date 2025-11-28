import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloModel } from '../model/articuloModel';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-articulo',
  imports: [FormsModule, CommonModule],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css',
})
export class Articulo {
  nombre: string = '';
  precio: number = 0;
  unidades: number = 0;
 
  art1 = { nombre: 'Papa', precio: 10.1, unidades: 30 };
  art2 = { nombre: 'Nosilla', precio: 4, unidades: 50 };
  art3 = { nombre: 'Xocos', precio: 2.50, unidades: 50 };
  articulos: ArticuloModel[] = [this.art1, this.art2, this.art3];
  comprar() {
  this.articulos.push({
    nombre: this.nombre,
    precio: this.precio,
    unidades: this.unidades,
  });
  }
}