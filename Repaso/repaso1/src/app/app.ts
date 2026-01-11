import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from './model/Usuarios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  usuarios$ = new Observable<Usuarios>();
  protected readonly title = signal('repaso1');
  ngOnInit(): void {
    
  }
}
