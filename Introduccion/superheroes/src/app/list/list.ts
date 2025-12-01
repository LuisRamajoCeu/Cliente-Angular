import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  heroes: string[] = ['Superman','Hulk','Spiderman','Ironman'];
  heroeBorrado: string | null = null;
  borrarUltimoHeroe() {
    if(this.heroes.length > 0){
      this.heroeBorrado = this.heroes.pop() || null;
    }
  }
}
