import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient){}
  getUsuarios():Observable<Usuario>{
    return this.http.get<Usuario>(this.url);
  }
}
