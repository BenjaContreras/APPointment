import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cita-card',
  templateUrl: './eliminar-cita-card.component.html',
  styleUrls: ['./eliminar-cita-card.component.css']
})
export class EliminarCitaCardComponent implements OnInit {

  mensaje:string="";

  @Input()
  citaId: number;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mensaje="Cita eliminada correctamente";
  }

  public getUrl(): string{
    return this.router.url;
  }

}
