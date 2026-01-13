import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula-service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaModel } from '../model/PeliculaModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})
export class Modificar implements OnInit{
  constructor(private servicio: PeliculaService, private router: Router, private act: ActivatedRoute){}

  pelicula: PeliculaModel = { id: 0, titulo: '', actores: [] };
  
  ngOnInit(): void {
    const id = +this.act.snapshot.params['id'];
    this.servicio.getPeliculaPorId(id).subscribe(data => {
      if (data) {
        this.pelicula = data;
      }
    });
  }

  guardar() {
    this.servicio.actualizarPelicula(this.pelicula);
    this.router.navigate(['/lista']);
  }

}
