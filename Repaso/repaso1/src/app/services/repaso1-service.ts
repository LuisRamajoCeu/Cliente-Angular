import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Repaso1Service {
  url = "jsonplaceholder.typicode.com/users";
  constructor (private http: HttpClient){}
  getUsuario(id: number = 1):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

}
