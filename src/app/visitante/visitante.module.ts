import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { ContactanosScreenComponent } from './screens/contactanos-screen/contactanos-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PacienteModule } from '../paciente/paciente.module';
import { DoctorModule } from '../doctor/doctor.module';
import { CoreModule } from '../core/core.module';
import { VisitanteComponent } from './visitante.component';


const Components = [
  VisitanteComponent,
  InicioScreenComponent,
  RegistrarseScreenComponent,
  ContactanosScreenComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    VisitanteRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PacienteModule,
    DoctorModule,
    CoreModule,
  ],
  exports: [...Components]
})
export class VisitanteModule { }
