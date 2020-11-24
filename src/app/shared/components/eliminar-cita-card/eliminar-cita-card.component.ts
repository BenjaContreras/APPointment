import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/citas-card.models';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-eliminar-cita-card',
  templateUrl: './eliminar-cita-card.component.html',
  styleUrls: ['./eliminar-cita-card.component.css']
})
export class EliminarCitaCardComponent implements OnInit {

  mensaje:string="";

  @Input()
  citaId: Cita;
  
  constructor(
    private router: Router,
    private citasProviderServices: CitasProvidersService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mensaje="Cita eliminada correctamente";
  }

  public getUrl(): string{
    return this.router.url;
  }

  deleteCita(cita: Cita) {
    return this.citasProviderServices.deleteCita(cita);
  }

}
