import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ScreensComponent } from './screens/screens.component';
import { DoctorModule } from '../doctor/doctor.module';
import { PacienteModule } from '../paciente/paciente.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [ComponentsComponent, ScreensComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DoctorModule,
    PacienteModule,
    SharedModule
  ]
})
export class AdminModule { }
