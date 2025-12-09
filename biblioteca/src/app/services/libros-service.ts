import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  libros: Libro[] = [
    {
      id:1,
      titulo:'Libro 1',
      autor:'Francisco'
    },{
      id:2,
      titulo:'Libro 2',
      autor:'Jose'
    },{
      id:3,
      titulo:'Libro 3',
      autor:'Mario'
    },{
      id:4,
      titulo:'Libro 4',
      autor:'Antonio'
    }
  ];
  getLibros(){
    return this.libros;
  }
  getLibroPorId(id:number):Libro{
    return this.libros[id - 1];
  }
}
