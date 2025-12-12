import { Component } from '@angular/core';
import { LibrosService } from '../services/libros-service';
import { Libro } from '../model/Libro';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-nuevo',
  imports: [RouterLink, FormsModule],
  templateUrl: './libro-nuevo.html',
  styleUrl: './libro-nuevo.css',
})
export class LibroNuevo {
  constructor(private librosService: LibrosService,
              private router: Router){}
  libro: Libro = { id: 0, titulo: '', autor: '' }
  altaLibro(){
    this.librosService.altaLibro(this.libro);
    this.router.navigate(['/libros']);
  }
}
