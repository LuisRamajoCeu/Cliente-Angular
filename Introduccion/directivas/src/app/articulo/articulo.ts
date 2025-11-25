import { Component } from '@angular/core';
import { ArticuloModel } from '../model/articuloModel';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css',
})
export class Articulo {
  nombre:string = '';
  precio:number = 0;
  unidades:number = 0;
  articulos: ArticuloModel[] = [
    {
      nombre: 'Teclado',
      precio: 75.50,
      unidades: 15
    },
    {
      nombre: 'Monitor',
      precio: 219.99,
      unidades: 7
    },
    {
      nombre: 'Ratón',
      precio: 25.00,
      unidades: 30
    }];
    registrar(event:any){
      this.nombre = event.target.innerHTML;
      this.precio = event.target.innerHTML;
      this.unidades = event.target.innerHTML - 1;
    }
}
