import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DoctorModule } from '../doctor/doctor.module';
import { PacienteModule } from '../paciente/paciente.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DoctorModule,
    PacienteModule,
    SharedModule
  ]
})
export class AdminModule { }
