import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/cita.model';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-eliminar-cita-card',
  templateUrl: './eliminar-cita-card.component.html',
  styleUrls: ['./eliminar-cita-card.component.less']
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
  }

  public getUrl(): string{
    return this.router.url;
  }

  deleteCita(cita: Cita) {
    this.mensaje="Cita eliminada correctamente";
    return this.citasProviderServices.deleteCita(cita);
  }

}
