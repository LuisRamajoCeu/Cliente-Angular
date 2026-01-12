import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet, PlanetsList } from '../model/planet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Planetas {
  url:string = 'https://swapi.dev/api/planets';
  constructor(private http: HttpClient){}
  getPlanets(page:number = 1):Observable<PlanetsList>{
    return this.http.get<PlanetsList>(`${this.url}?page=${page}`);
  }  

  getPlaneta(num : number = 1): Observable<Planet> {
    return this.http.get<Planet>(`${this.url}/${num}`);
  }

}
