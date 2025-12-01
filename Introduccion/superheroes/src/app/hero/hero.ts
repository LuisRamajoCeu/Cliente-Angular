import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  nombre:string = 'Ironman';
  edad:number = 30;
  
  edadA18():void {
    this.edad = 18;
  }
  spiderman():void {
    this.nombre = 'Spiderman';
  }
}
