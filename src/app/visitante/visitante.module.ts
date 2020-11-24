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
import { CitasProvidersService } from '../core/providers/citas/citas-providers.service';
import { ContactoProvidersService } from '../core/providers/contacto/contacto-providers.service';
import { PacienteProvidersService } from '../core/providers/paciente/paciente-providers.service';
import { EncuentranosScreenComponent } from './screens/encuentranos-screen/encuentranos-screen/encuentranos-screen.component';


const Components = [
  VisitanteComponent,
  InicioScreenComponent,
  RegistrarseScreenComponent,
  ContactanosScreenComponent,
  EncuentranosScreenComponent
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
  providers: [
    CitasProvidersService,
    ContactoProvidersService,
    PacienteProvidersService,
  ],
  exports: [...Components]
})
export class VisitanteModule { }
