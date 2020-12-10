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
import { CitaAgregarScreenComponent } from './screens/cita-agregar-screen/cita-agregar-screen.component';
import { CitaEliminarScreenComponent } from './screens/cita-eliminar-screen/cita-eliminar-screen.component';
import { CitaModificarScreenComponent } from './screens/cita-modificar-screen/cita-modificar-screen.component';
import { CitaObtenerScreenComponent } from './screens/cita-obtener-screen/cita-obtener-screen.component';
import { ContactoAgregarScreenComponent } from './screens/contacto-agregar-screen/contacto-agregar-screen.component';
import { ContactoEliminarScreenComponent } from './screens/contacto-eliminar-screen/contacto-eliminar-screen.component';
import { ContactoModificarScreenComponent } from './screens/contacto-modificar-screen/contacto-modificar-screen.component';
import { ContactoObtenerScreenComponent } from './screens/contacto-obtener-screen/contacto-obtener-screen.component';
import { ContactoEspecialObtenerScreenComponent } from './screens/contacto-especial-obtener-screen/contacto-especial-obtener-screen.component';
import { ContactoEspecialAgregarScreenComponent } from './screens/contacto-especial-agregar-screen/contacto-especial-agregar-screen.component';
import { ContactoEspecialModificarScreenComponent } from './screens/contacto-especial-modificar-screen/contacto-especial-modificar-screen.component';
import { ContactoEspecialEliminarScreenComponent } from './screens/contacto-especial-eliminar-screen/contacto-especial-eliminar-screen.component';
import { ContactoEspecialObtenerxrutScreenComponent } from './screens/contacto-especial-obtenerxrut-screen/contacto-especial-obtenerxrut-screen.component';
import { DoctorObtenerScreenComponent } from './screens/doctor-obtener-screen/doctor-obtener-screen.component';
import { DoctorAgregarScreenComponent } from './screens/doctor-agregar-screen/doctor-agregar-screen.component';
import { DoctorEliminarScreenComponent } from './screens/doctor-eliminar-screen/doctor-eliminar-screen.component';
import { DoctorModificarScreenComponent } from './screens/doctor-modificar-screen/doctor-modificar-screen.component';
import { DoctorObtenerxrutScreenComponent } from './screens/doctor-obtenerxrut-screen/doctor-obtenerxrut-screen.component';
import { PacienteObtenerxrutScreenComponent } from './screens/paciente-obtenerxrut-screen/paciente-obtenerxrut-screen.component';
import { PacienteObtenerScreenComponent } from './screens/paciente-obtener-screen/paciente-obtener-screen.component';
import { PacienteModificarScreenComponent } from './screens/paciente-modificar-screen/paciente-modificar-screen.component';
import { PacienteAgregarScreenComponent } from './screens/paciente-agregar-screen/paciente-agregar-screen.component';
import { PacienteEliminarScreenComponent } from './screens/paciente-eliminar-screen/paciente-eliminar-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { AgregarCitaComponent } from './components/agregar-cita/agregar-cita.component';
import { ModificarCitaComponent } from './components/modificar-cita/modificar-cita.component';
import { EliminarCitaComponent } from './components/eliminar-cita/eliminar-cita/eliminar-cita.component';
import { AgregarContactoComponent } from './components/agregar-contacto/agregar-contacto/agregar-contacto.component';
import { ModificarContactoComponent } from './components/modificar-contacto/modificar-contacto/modificar-contacto.component';
import { EliminarContactoComponent } from './components/eliminar-contacto/eliminar-contacto/eliminar-contacto.component';
import { ContactosCardComponent } from './components/contactos-card/contactos-card/contactos-card.component';
import { ContactosEspecialesCardComponent } from './components/contactosEspeciales-card/contactos-especiales-card/contactos-especiales-card.component';
import { AgregarContactoEspecialComponent } from './components/agregar-contactoEspecial/agregar-contacto-especial/agregar-contacto-especial.component';
import { EliminarContactoEspecialComponent } from './components/eliminar-contactoEspecial/eliminar-contacto-especial/eliminar-contacto-especial.component';
import { ModificarContactoEspecialComponent } from './components/modificar-contactoEspecial/modificar-contacto-especial/modificar-contacto-especial.component';
import { ObtenerRutContactoEspecialComponent } from './components/obtenerRut-contactoEspecial/obtener-rut-contacto-especial/obtener-rut-contacto-especial.component';

const Components = [
  AdminComponent, PacientesScreenComponent,
  DoctoresScreenComponent, CitasScreenComponent,
  ContactoScreenComponent, ContactoEspecialScreenComponent,
  InicioAdminComponent,
  CitaAgregarScreenComponent, CitaEliminarScreenComponent,
  CitaModificarScreenComponent, CitaObtenerScreenComponent,
  ContactoAgregarScreenComponent, ContactoEliminarScreenComponent,
  ContactoModificarScreenComponent, ContactoObtenerScreenComponent,
  ContactoEspecialObtenerScreenComponent, ContactoEspecialAgregarScreenComponent,
  ContactoEspecialModificarScreenComponent, ContactoEspecialEliminarScreenComponent,
  ContactoEspecialObtenerxrutScreenComponent, DoctorObtenerScreenComponent,
  DoctorAgregarScreenComponent, DoctorEliminarScreenComponent,
  DoctorModificarScreenComponent, DoctorObtenerxrutScreenComponent,
  PacienteObtenerxrutScreenComponent, PacienteObtenerScreenComponent,
  PacienteModificarScreenComponent, PacienteAgregarScreenComponent,
  PacienteEliminarScreenComponent, AgregarCitaComponent,
  ModificarCitaComponent, EliminarCitaComponent,
  AgregarContactoComponent, ModificarContactoComponent,
  EliminarContactoComponent, ContactosCardComponent
];

@NgModule({
  declarations: [...Components, ContactosEspecialesCardComponent, AgregarContactoEspecialComponent, EliminarContactoEspecialComponent, ModificarContactoEspecialComponent, ObtenerRutContactoEspecialComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DoctorModule,
    PacienteModule,
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
    DoctorProvidersService,
    PacienteProvidersService,
    ContactoProvidersService,
    ContactoPersonalProvidersService
  ],
  exports: [...Components]
})
export class AdminModule { }