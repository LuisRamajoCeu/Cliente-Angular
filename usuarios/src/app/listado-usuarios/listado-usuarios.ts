import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-usuarios',
  imports: [AsyncPipe],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css',
})
export class ListadoUsuarios {
  usuariosList$ = new Observable<Usuario>;
  constructor(private usuarioService: UsuarioService){}
  ngOnInit():void{
    this.usuariosList$ = this.usuarioService.getUsuarios();
  }
}
