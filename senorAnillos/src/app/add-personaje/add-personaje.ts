import { Component } from '@angular/core';
import { Personaje } from '../model/Personaje';
import { Anillos } from '../services/anillos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-personaje',
  imports: [FormsModule],
  templateUrl: './add-personaje.html',
  styleUrl: './add-personaje.css',
})
export class AddPersonaje {
  listaPersonajes:Personaje[] = [];
  constructor (private anillos: Anillos){}
  ngOnInit():void{
    this.listaPersonajes = this.anillos.getPersonajes();
  }
  nuevoNombre:string = '';
  nuevaRaza:string = '';
  ultimoId:number = this.listaPersonajes.length + 1;
  personaje:Personaje[] = [{id:this.ultimoId,nombre:this.nuevoNombre,raza:this.nuevaRaza}];
  agregarPersonaje(nombre:string, raza:string){
    this.personaje=[{id:this.ultimoId,nombre:nombre,raza:raza}];
    this.anillos.agregarPersonaje(this.personaje[this.ultimoId]);
    console.log(this.personaje);
    console.log(this.listaPersonajes.length);
    console.log(this.ultimoId);
  }
}
