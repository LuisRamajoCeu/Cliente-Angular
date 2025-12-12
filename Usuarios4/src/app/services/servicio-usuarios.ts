import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioUsuarios {
  url:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient){}
  getUsuarios():Observable<Usuario>{
    return this.http.get<Usuario>(this.url);
  }
  
}
