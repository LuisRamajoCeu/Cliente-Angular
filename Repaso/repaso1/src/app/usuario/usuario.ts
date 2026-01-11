import { Component } from '@angular/core';
import { Repaso1Service } from '../services/repaso1-service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../model/Usuarios';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

  constructor(private service:Repaso1Service){}

  userId: number | null = null;
  usuarios$: Observable<Usuarios> | undefined;

  buscarUsuario() {
    if (this.userId) {
      this.usuarios$ = this.service.getUsuario(this.userId);
    }
    
  }

}
