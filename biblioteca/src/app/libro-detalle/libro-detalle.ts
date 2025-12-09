import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../model/Libro';
import { LibrosService } from '../services/libros-service';

@Component({
  selector: 'app-libro-detalle',
  imports: [],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css',
})
export class LibroDetalle {
  constructor(private act: ActivatedRoute,
              private librosService: LibrosService){}
  libro : Libro = { id: 0, titulo: '', autor: '' }
  ngOnInit():void{
    const idBuscar = this.act.snapshot.params['id'];
  }
  this.libro = this.librosService.getLibroPorId(idBuscar);

}
