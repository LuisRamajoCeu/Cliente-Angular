import { Component } from '@angular/core';
import { ServicioUsuarios } from '../services/servicio-usuarios';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-usuarios',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios {
  constructor(private servicioUsuarios: ServicioUsuarios){}
  usuariosList$ = new Observable<Usuario>();
  ngOnInit():void{
    this.usuariosList$ = this.servicioUsuarios.getUsuarios();
  }
}
