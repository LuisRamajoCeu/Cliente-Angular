import { Routes } from '@angular/router';
import { App } from './app';
import { Usuario } from './usuario/usuario';
import { Post } from './post/post';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'usuario', component: Usuario },
    { path: 'post', component: Post },
    { path: '**', component: App }
];
