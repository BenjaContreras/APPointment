import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-cita-card',
  templateUrl: './eliminar-cita-card.component.html',
  styleUrls: ['./eliminar-cita-card.component.css']
})
export class EliminarCitaCardComponent implements OnInit {

  mensaje:string="";

  @Input()
  citaId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mensaje="Cita eliminada correctamente";
  }

}
