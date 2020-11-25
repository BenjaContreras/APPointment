import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DoctorModule } from '../doctor/doctor.module';
import { PacienteModule } from '../paciente/paciente.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { PacientesScreenComponent } from './screens/paciente-screen/pacientes-screen/pacientes-screen.component';
import { DoctoresScreenComponent } from './screens/doctor-screen/doctores-screen/doctores-screen.component';
import { CitasScreenComponent } from './screens/cita-screen/citas-screen/citas-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen/contacto-screen.component';
import { ContactoEspecialScreenComponent } from './screens/contactoEspecial-screen/contacto-especial-screen/contacto-especial-screen.component';
import { CitasProvidersService } from '../core/providers/citas/citas-providers.service';
import { DoctorProvidersService } from '../core/providers/doctor/doctor-providers.service';
import { PacienteProvidersService } from '../core/providers/paciente/paciente-providers.service';
import { ContactoProvidersService } from '../core/providers/contacto/contacto-providers.service';
import { ContactoPersonalProvidersService } from '../core/providers/contactoPersonal/contacto-personal-providers.service';
import { InicioAdminComponent } from './screens/inicio-admin/inicio-admin/inicio-admin.component';
import { AgregarCitaComponent } from './components/CRUD-cita/agregar-cita/agregar-cita/agregar-cita.component';
import { EliminarCitaComponent } from './components/CRUD-cita/eliminar-cita/eliminar-cita/eliminar-cita.component';
import { ModificarCitaComponent } from './components/CRUD-cita/modificar-cita/modificar-cita/modificar-cita.component';
import { ObtenerCitaComponent } from './components/CRUD-cita/obtener-cita/obtener-cita/obtener-cita.component';
import { AgregarContactoComponent } from './components/CRUD-contacto/agregar-contacto/agregar-contacto/agregar-contacto.component';
import { EliminarContactoComponent } from './components/CRUD-contacto/eliminar-contacto/eliminar-contacto/eliminar-contacto.component';
import { ObtenerContactoComponent } from './components/CRUD-contacto/obtener-contacto/obtener-contacto/obtener-contacto.component';
import { ObtenerContactoEspecialComponent } from './components/CRUD-contactoEspecial/obtener-contactoEspecial/obtener-contacto-especial/obtener-contacto-especial.component';
import { AgregarContactoEspecialComponent } from './components/CRUD-contactoEspecial/agregar-contactoEspecial/agregar-contacto-especial/agregar-contacto-especial.component';
import { EliminarContactoEspecialComponent } from './components/CRUD-contactoEspecial/eliminar-contactoEspecial/eliminar-contacto-especial/eliminar-contacto-especial.component';
import { ModificarContactoEspecialComponent } from './components/CRUD-contactoEspecial/modificar-contactoEspecial/modificar-contacto-especial/modificar-contacto-especial.component';
import { AgregarDoctorComponent } from './components/CRUD-doctor/agregar-doctor/agregar-doctor/agregar-doctor.component';
import { EliminarDoctorComponent } from './components/CRUD-doctor/eliminar-doctor/eliminar-doctor/eliminar-doctor.component';
import { ModificarDoctorComponent } from './components/CRUD-doctor/modificar-doctor/modificar-doctor/modificar-doctor.component';
import { ModificarPacienteComponent } from './components/CRUD-paciente/modificar-paciente/modificar-paciente/modificar-paciente.component';
import { EliminarPacienteComponent } from './components/CRUD-paciente/eliminar-paciente/eliminar-paciente/eliminar-paciente.component';
import { ObtenerPacienteComponent } from './components/CRUD-paciente/obtener-paciente/obtener-paciente/obtener-paciente.component';
import { AgregarPacienteComponent } from './components/CRUD-paciente/agregar-paciente/agregar-paciente/agregar-paciente.component';
import { ObtenerXRutPacienteComponent } from './components/CRUD-paciente/obtenerXRut-paciente/obtener-xrut-paciente/obtener-xrut-paciente.component';
import { ObtenerXRutContactoEspecialComponent } from './components/CRUD-contactoEspecial/obtenerXRut-contactoEspecial/obtener-xrut-contacto-especial/obtener-xrut-contacto-especial.component';
import { ObtenerXRutDoctorComponent } from './components/CRUD-doctor/obtenerXRut-doctor/obtener-xrut-doctor/obtener-xrut-doctor.component';

const Components = [
  AdminComponent, PacientesScreenComponent,
  DoctoresScreenComponent, CitasScreenComponent,
  ContactoScreenComponent, ContactoEspecialScreenComponent,
  InicioAdminComponent, AgregarCitaComponent,
  EliminarCitaComponent, ModificarCitaComponent,
  ObtenerCitaComponent, AgregarContactoComponent,
  EliminarContactoComponent, ObtenerContactoComponent,
  ObtenerContactoEspecialComponent, AgregarContactoEspecialComponent,
  EliminarContactoEspecialComponent, ObtenerXRutContactoEspecialComponent,
  ModificarContactoEspecialComponent, AgregarDoctorComponent,
  EliminarDoctorComponent, ObtenerXRutPacienteComponent,
  ModificarDoctorComponent, ModificarPacienteComponent,
  EliminarPacienteComponent, ObtenerPacienteComponent,
  AgregarPacienteComponent, ObtenerXRutDoctorComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DoctorModule,
    PacienteModule,
    SharedModule,
  ],
  providers: [
    CitasProvidersService,
    DoctorProvidersService,
    PacienteProvidersService,
    ContactoProvidersService,
    ContactoPersonalProvidersService
  ],
  exports: [...Components]
})
export class AdminModule { }