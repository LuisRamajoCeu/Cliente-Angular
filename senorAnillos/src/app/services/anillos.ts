import { Injectable } from '@angular/core';
import { Personaje } from '../model/Personaje';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Anillos {
  personajes: Personaje[] = [
    { id:1,
      nombre:"Aragorn",
      raza:"Humano" },{
      id:2,
      nombre:"Gandalf",
      raza:"Mago" },{
      id:3,
      nombre:"Legolas",
      raza:"Elfo"  }
  ];
  getPersonajes(): Personaje[]{
    return this.personajes;
  }
  eliminarPersonaje(id:number):void{
    this.personajes = this.personajes.filter((p) => p.id !== id);
  }
  agregarPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }
}
