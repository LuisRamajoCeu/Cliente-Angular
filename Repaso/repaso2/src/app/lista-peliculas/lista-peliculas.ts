import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula-service';
import { Observable } from 'rxjs';
import { PeliculaModel, RespuestaJSON } from '../model/PeliculaModel';
import { CommonModule } from '@angular/common';
import { Detalle } from "../detalle/detalle";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-peliculas',
  imports: [CommonModule, Detalle, RouterLink],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas implements OnInit{
  constructor(private servicio: PeliculaService){}
  listaPeliculas$!: Observable<RespuestaJSON>;
  
  ngOnInit(): void {
    this.listaPeliculas$ = this.servicio.getListaPeliculas();
  }
  
  pSeleccionada: PeliculaModel | null = null;

  seleccionarPelicula(p: PeliculaModel){
    this.pSeleccionada = p;
  }

}
