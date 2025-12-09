import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Libros } from './libros/libros';
import { Contacto } from './contacto/contacto';
import { LibroDetalle } from './libro-detalle/libro-detalle';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'libros', component: Libros },
    { path: 'libros/:id', component: LibroDetalle },
    { path: 'contacto', component: Contacto },
    { path: '**', component: Home }
];
