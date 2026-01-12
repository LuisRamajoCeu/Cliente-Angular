import { Component, OnInit } from '@angular/core';
import { Planetas } from '../services/planetas-service';
import { Observable } from 'rxjs';
import { Planet } from '../model/planet';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  imports: [AsyncPipe],
  templateUrl: './planet-detail.html',
  styleUrl: './planet-detail.css',
})
export class PlanetDetail implements OnInit {
  planeta$ = new Observable<Planet>();

  constructor(private servicioPlaneta: Planetas) {}

  ngOnInit(): void {
    this.planeta$ = this.servicioPlaneta.getPlaneta();
  }

}
