import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { PeliculaModel, RespuestaJSON } from '../model/PeliculaModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  url:string = 'peliculas.json';
  constructor(private http: HttpClient) {}
  private peliculasEnMemoria: PeliculaModel[] = [];
  getListaPeliculas(): Observable<RespuestaJSON>{
    if (this.peliculasEnMemoria.length > 0) {
      return of({ peliculas: this.peliculasEnMemoria });
    }
    return this.http.get<RespuestaJSON>(this.url).pipe(
      tap(respuesta => this.peliculasEnMemoria = respuesta.peliculas)
    );
  }
  getPeliculaPorId(id: number){
    return this.getListaPeliculas().pipe(
      map(res => res.peliculas.find(p => p.id === id))
    );
  }
  
  actualizarPelicula(peliModificada: PeliculaModel): void {
      const index = this.peliculasEnMemoria.findIndex(p => p.id === peliModificada.id);
      if (index !== -1) {
        this.peliculasEnMemoria[index] = peliModificada;
      }
    }

}
