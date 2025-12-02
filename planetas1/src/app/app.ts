import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetList } from "./planet-list/planet-list";
import { PlanetDetail } from "./planet-detail/planet-detail";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlanetList, PlanetDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('planetas1');
}
