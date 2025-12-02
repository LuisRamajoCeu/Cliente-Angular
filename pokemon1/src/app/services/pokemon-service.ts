import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemonList } from '../model/pokemonList';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  constructor (private http: HttpClient){}
  getPokemonList() {
    return this.http.get<pokemonList>(this.url);
  }
}
