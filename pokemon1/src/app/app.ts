import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from './services/pokemon-service';
import { AsyncPipe } from '@angular/common';
import { pokemonList } from './model/pokemonList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('pokemon1');
  pokemonList$ = new Observable<pokemonList>(); //pokemonList si esta creado el modelo
  constructor(private pokemonService: PokemonService){}
  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }
}
