import { Routes } from '@angular/router';
import { ListaPeliculas } from './lista-peliculas/lista-peliculas';
import { Detalle } from './detalle/detalle';
import { Modificar } from './modificar/modificar';

export const routes: Routes = [
    { path: 'lista', component: ListaPeliculas },
    { path: 'modificar/:id', component: Modificar },
    { path: '**', redirectTo: '' }

];
