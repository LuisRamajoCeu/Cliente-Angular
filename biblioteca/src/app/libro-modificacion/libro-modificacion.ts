import { Component } from '@angular/core';
import { Libro } from '../model/Libro';
import { LibrosService } from '../services/libros-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-modificacion',
  imports: [FormsModule, RouterLink],
  templateUrl: './libro-modificacion.html',
  styleUrl: './libro-modificacion.css',
})
export class LibroModificacion {
  constructor(private librosService: LibrosService,
              private router: Router,
              private act: ActivatedRoute){}
  libro: Libro = { id: 0, titulo: '', autor: '' }
    ngOnInit(){
      let id = this.act.snapshot.params['id'];
      this.libro = this.librosService.getLibroPorId(id);
    }
    guardar(){
      this.router.navigate(['/libros']);
      this.librosService.actualizar(this.libro);
    }

}
