import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() nombre:string = '';
  @Input() nota:string = '';
  @Output() nombreDeHijo = new EventEmitter<string>();
  @Output() notaDeHijo = new EventEmitter<string>();

  nombreHijo:string = '';
  notaHijo:string = '';

  cambiarNombreHijo(){
    this.nombre = this.nombreHijo;
    this.nombreDeHijo.emit(this.nombreHijo);
  }
  cambiarNotaHijo(){
    this.nota = this.notaHijo;
    this.notaDeHijo.emit(this.notaHijo);
  }
}
