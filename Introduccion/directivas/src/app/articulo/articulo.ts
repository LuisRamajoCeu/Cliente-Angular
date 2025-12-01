import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloModel } from '../model/articuloModel';
import { CommonModule } from '@angular/common';
import { ListadoArticulos } from "../listado-articulos/listado-articulos";
 
@Component({
  selector: 'app-articulo',
  imports: [FormsModule, CommonModule, ListadoArticulos],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css',
})
export class Articulo {
  nombre = signal<string>('');
  precio = signal<number>(0);
  unidades = signal<number>(0);
 
  listaArticulos = signal<ArticuloModel[]>(
    [
      { nombre: 'Papa', precio: 10.1, unidades: 30 },
      { nombre: 'Nosilla', precio: 4, unidades: 50 },
      { nombre: 'Xocos', precio: 2.50, unidades: 50 }
  ]);
  comprar(): void {
  // 1. Crear objeto literal con los valores del formulario
    const nuevoArticulo: ArticuloModel = {
      nombre: this.nombre(),
      precio: this.precio(),
      unidades: this.unidades()
    };

    // 2. Añadimos a la lista de forma inmutable
    this.listaArticulos.update(lista => [...lista, nuevoArticulo]);

    // 3. Limpiar formulario
    this.nombre.set('');
    this.precio.set(0);
    this.unidades.set(0);
  }
}