import { Component } from '@angular/core';
import { Libro } from '../model/Libro';
import { LibrosService } from '../services/libros-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-libros',
  imports: [RouterLink],
  templateUrl: './libros.html',
  styleUrl: './libros.css',
})
export class Libros {
  listaLibros:Libro[] = [];
  constructor (private LibrosService: LibrosService){}
  ngOnInit():void{
    this.listaLibros = this.LibrosService.getLibros();
  }
}
