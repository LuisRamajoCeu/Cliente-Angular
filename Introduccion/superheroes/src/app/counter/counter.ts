import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  contador:number = 10;
  valorOriginal:number = 10;
  sumar():void {
    this.contador = this.contador + 1;
  }
  resetear():void {
    this.contador = this.valorOriginal;
  }
  restar():void {
    this.contador = this.contador - 1;
  }
}
