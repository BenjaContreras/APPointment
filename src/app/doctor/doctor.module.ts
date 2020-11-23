import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DoctorComponent } from './doctor.component';
import { ModificarCitaComponent } from './components/modificar-cita/modificar-cita.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalAyudaDoctorComponent } from './screens/sesion-personal-ayuda-doctor/sesion-personal-ayuda-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CitasProvidersService } from '../core/providers/citas/citas-providers.service';
import { HttpProvidersService } from '../core/providers/http/http-providers.service';
import { DoctorProvidersService } from '../core/providers/doctor/doctor-providers.service';

const Components = [
  DoctorComponent,
  ModificarCitaComponent,
  InicioSesionScreenComponent,
  SesionPersonalDoctorComponent,
  SesionPersonalCitasDoctorComponent,
  SesionPersonalAyudaDoctorComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    CitasProvidersService,
    HttpProvidersService,
    DoctorProvidersService
  ],
  exports: [...Components]
})
export class DoctorModule { }
