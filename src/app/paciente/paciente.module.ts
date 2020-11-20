import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PacienteComponent } from './paciente.component';
import { ModificarCitaComponent } from './components/modificar-cita/modificar-cita.component';
import { InicioSesionUsuarioScreenComponent } from './screens/inicio-sesion-usuario-screen/inicio-sesion-usuario-screen.component';
import { SesionPersonalPacienteComponent } from './screens/sesion-personal-paciente/sesion-personal-paciente.component';
import { SesionPersonalAyudaPacienteComponent } from './screens/sesion-personal-ayuda-paciente/sesion-personal-ayuda-paciente.component';
import { SesionPersonalCitasPacienteComponent } from './screens/sesion-personal-citas-paciente/sesion-personal-citas-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';


const Components = [
  PacienteComponent,
  ModificarCitaComponent,
  InicioSesionUsuarioScreenComponent,
  SesionPersonalPacienteComponent,
  SesionPersonalAyudaPacienteComponent,
  SesionPersonalCitasPacienteComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule
  ],
  exports: [...Components]
})
export class PacienteModule { }
