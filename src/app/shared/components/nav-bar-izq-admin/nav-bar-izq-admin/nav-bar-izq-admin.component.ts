import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from 'src/app/core/services/citas/citas.service';
import { ContactosService } from 'src/app/core/services/contactos/contactos.service';
import { ContactosEspecialesService } from 'src/app/core/services/contactosEspeciales/contactos-especiales.service';
import { DoctoresService } from 'src/app/core/services/doctores/doctores.service';
import { PacientesService } from 'src/app/core/services/pacientes/pacientes.service';

@Component({
  selector: 'app-nav-bar-izq-admin',
  templateUrl: './nav-bar-izq-admin.component.html',
  styleUrls: ['./nav-bar-izq-admin.component.less']
})
export class NavBarIzqAdminComponent implements OnInit {

  public citasServices: CitasService;
  public pacienteServices: PacientesService;
  public doctorServices: DoctoresService;
  public contactoServices: ContactosService;
  public contactoEspecialServices: ContactosEspecialesService;

  constructor(
    private router: Router,
  ) { 
    this.citasServices = new CitasService(router);
    this.pacienteServices = new PacientesService(router);
    this.doctorServices = new DoctoresService(router);
    this.contactoServices = new ContactosService(router);
    this.contactoEspecialServices = new ContactosEspecialesService(router);
  }

  ngOnInit(): void {
  }

  public getUrl(): string{
    return this.router.url;
  }
}
