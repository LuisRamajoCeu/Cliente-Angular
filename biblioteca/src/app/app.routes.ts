import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Libros } from './libros/libros';
import { Contacto } from './contacto/contacto';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { LibroNuevo } from './libro-nuevo/libro-nuevo';
import { LibroModificacion } from './libro-modificacion/libro-modificacion';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'libros', component: Libros },
    { path: 'libros/:id', component: LibroDetalle },
    { path: 'contacto', component: Contacto },
    { path: 'nuevo', component: LibroNuevo },
    { path: 'modificar/:id', component: LibroModificacion },
    { path: '**', component: Home }
];
