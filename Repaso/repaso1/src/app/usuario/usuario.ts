import { Component } from '@angular/core';
import { Repaso1Service } from '../services/repaso1-service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../model/Usuarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  userId: number | null = null;
  usuario$!: Observable<Usuarios>;
  
  constructor(private service:Repaso1Service){}

  buscar() {
    if (this.userId) {
      this.usuario$ = this.service.getUsuario(this.userId);
    }
    
  }

}
