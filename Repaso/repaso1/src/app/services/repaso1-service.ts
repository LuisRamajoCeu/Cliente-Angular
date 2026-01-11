import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';
import { Posts } from '../model/Posts';

@Injectable({
  providedIn: 'root',
})
export class Repaso1Service {
  url = "jsonplaceholder.typicode.com/";
  constructor (private http: HttpClient){}
  getUsuario(id: number = 1):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/users/${id}`);
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.url}/posts`);
  }

}
