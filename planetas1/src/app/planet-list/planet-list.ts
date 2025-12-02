import { Component } from '@angular/core';
import { PlanetsList } from '../model/planet';
import { Planetas } from '../services/planetas-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  imports: [AsyncPipe],
  templateUrl: './planet-list.html',
  styleUrl: './planet-list.css',
})
export class PlanetList {
  planetsList$ = new Observable<PlanetsList>();
  constructor(private planetas: Planetas){}
  ngOnInit(): void {
    this.planetsList$ = this.planetas.getPlanets();
  }
}
