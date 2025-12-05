import { Component } from '@angular/core';
import { Anillos } from '../services/anillos';
import { Personaje } from '../model/Personaje'

@Component({
  selector: 'app-list-personaje',
  imports: [],
  templateUrl: './list-personaje.html',
  styleUrl: './list-personaje.css',
})
export class ListPersonaje {
  listaPersonajes:Personaje[] = [];
  constructor (private anillos: Anillos){}
  ngOnInit():void{
    this.listaPersonajes = this.anillos.getPersonajes();
  }
  eliminarPersonaje(id:number):void{
    this.anillos.eliminarPersonaje(id);
    this.listaPersonajes = this.anillos.getPersonajes();
  }
}
