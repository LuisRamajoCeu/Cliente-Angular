import { Component } from '@angular/core';
import { ListPersonaje } from "../list-personaje/list-personaje";
import { AddPersonaje } from "../add-personaje/add-personaje";

@Component({
  selector: 'app-main',
  imports: [ListPersonaje, AddPersonaje],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
