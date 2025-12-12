import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'usuarios', component: ListaUsuarios },
    { path: 'detalles/:id', component: DetalleUsuario },
    { path: '**', component: Home },

];
