import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasService } from './services/citas/citas.service';
import { ContactosService } from './services/contactos/contactos.service';
import { ContactosEspecialesService } from './services/contactosEspeciales/contactos-especiales.service';
import { DoctoresService } from './services/doctores/doctores.service';
import { PacientesService } from './services/pacientes/pacientes.service';
import { HttpService } from './services/http/http.service';


const Services = [
  CitasService,
  ContactosService,
  ContactosEspecialesService,
  DoctoresService,
  PacientesService,
  HttpService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...Services]
})
export class CoreModule { }
