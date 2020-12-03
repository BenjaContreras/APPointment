import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CitaAgregarScreenComponent } from './screens/cita-agregar-screen/cita-agregar-screen.component';
import { CitaEliminarScreenComponent } from './screens/cita-eliminar-screen/cita-eliminar-screen.component';
import { CitaModificarScreenComponent } from './screens/cita-modificar-screen/cita-modificar-screen.component';
import { CitaObtenerScreenComponent } from './screens/cita-obtener-screen/cita-obtener-screen.component';
import { CitasScreenComponent } from './screens/cita-screen/citas-screen/citas-screen.component';
import { ContactoAgregarScreenComponent } from './screens/contacto-agregar-screen/contacto-agregar-screen.component';
import { ContactoEliminarScreenComponent } from './screens/contacto-eliminar-screen/contacto-eliminar-screen.component';
import { ContactoEspecialAgregarScreenComponent } from './screens/contacto-especial-agregar-screen/contacto-especial-agregar-screen.component';
import { ContactoEspecialEliminarScreenComponent } from './screens/contacto-especial-eliminar-screen/contacto-especial-eliminar-screen.component';
import { ContactoEspecialModificarScreenComponent } from './screens/contacto-especial-modificar-screen/contacto-especial-modificar-screen.component';
import { ContactoEspecialObtenerScreenComponent } from './screens/contacto-especial-obtener-screen/contacto-especial-obtener-screen.component';
import { ContactoEspecialObtenerxrutScreenComponent } from './screens/contacto-especial-obtenerxrut-screen/contacto-especial-obtenerxrut-screen.component';
import { ContactoModificarScreenComponent } from './screens/contacto-modificar-screen/contacto-modificar-screen.component';
import { ContactoObtenerScreenComponent } from './screens/contacto-obtener-screen/contacto-obtener-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen/contacto-screen.component';
import { ContactoEspecialScreenComponent } from './screens/contactoEspecial-screen/contacto-especial-screen/contacto-especial-screen.component';
import { DoctorAgregarScreenComponent } from './screens/doctor-agregar-screen/doctor-agregar-screen.component';
import { DoctorEliminarScreenComponent } from './screens/doctor-eliminar-screen/doctor-eliminar-screen.component';
import { DoctorModificarScreenComponent } from './screens/doctor-modificar-screen/doctor-modificar-screen.component';
import { DoctorObtenerScreenComponent } from './screens/doctor-obtener-screen/doctor-obtener-screen.component';
import { DoctorObtenerxrutScreenComponent } from './screens/doctor-obtenerxrut-screen/doctor-obtenerxrut-screen.component';
import { DoctoresScreenComponent } from './screens/doctor-screen/doctores-screen/doctores-screen.component';
import { InicioAdminComponent } from './screens/inicio-admin/inicio-admin/inicio-admin.component';
import { PacienteAgregarScreenComponent } from './screens/paciente-agregar-screen/paciente-agregar-screen.component';
import { PacienteEliminarScreenComponent } from './screens/paciente-eliminar-screen/paciente-eliminar-screen.component';
import { PacienteModificarScreenComponent } from './screens/paciente-modificar-screen/paciente-modificar-screen.component';
import { PacienteObtenerScreenComponent } from './screens/paciente-obtener-screen/paciente-obtener-screen.component';
import { PacienteObtenerxrutScreenComponent } from './screens/paciente-obtenerxrut-screen/paciente-obtenerxrut-screen.component';
import { PacientesScreenComponent } from './screens/paciente-screen/pacientes-screen/pacientes-screen.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'inicio-admin-screen', component: InicioAdminComponent },
    
      { path: 'paciente-admin-screen', component: PacientesScreenComponent },
      //DERIVACIONES PACIENTE
          { path: 'agregar-paciente-admin-screen', component: PacienteAgregarScreenComponent },
          { path: 'eliminar-paciente-admin-screen', component: PacienteEliminarScreenComponent },
          { path: 'modificar-paciente-admin-screen', component: PacienteModificarScreenComponent },
          { path: 'obtener-paciente-admin-screen', component: PacienteObtenerScreenComponent },
          { path: 'obtenerPorRut-paciente-admin-screen', component: PacienteObtenerxrutScreenComponent },
    
      { path: 'doctor-admin-screen', component: DoctoresScreenComponent },
      //DERIVACIONES DOCTOR
          { path: 'agregar-doctor-admin-screen', component: DoctorAgregarScreenComponent },
          { path: 'eliminardoctor-admin-screen', component: DoctorEliminarScreenComponent },
          { path: 'modificar-doctor-admin-screen', component: DoctorModificarScreenComponent },
          { path: 'obtener-doctor-admin-screen', component: DoctorObtenerScreenComponent },
          { path: 'obtenerPorRut-doctor-admin-screen', component: DoctorObtenerxrutScreenComponent },
    
      { path: 'contacto-admin-screen', component: ContactoScreenComponent },
      //DERIVACIONES CONTACO GENERAL
          { path: 'agregar-contacto-admin-screen', component: ContactoAgregarScreenComponent },
          { path: 'eliminar-contacto-admin-screen', component: ContactoEliminarScreenComponent },
          { path: 'modificar-contacto-admin-screen', component: ContactoModificarScreenComponent },
          { path: 'obtener-contacto-admin-screen', component: ContactoObtenerScreenComponent },
          
      { path: 'contactoPersonal-admin-screen', component: ContactoEspecialScreenComponent },
      //DERIVACIONES CONTACTO PERSONAL
          { path: 'agregar-contactoPersonal-admin-screen', component: ContactoEspecialAgregarScreenComponent },
          { path: 'eliminar-contactoPersonal-admin-screen', component: ContactoEspecialEliminarScreenComponent },
          { path: 'modificar-contactoPersonal-admin-screen', component: ContactoEspecialModificarScreenComponent },
          { path: 'obtener-contactoPersonal-admin-screen', component: ContactoEspecialObtenerScreenComponent },
          { path: 'obtenerPorRut-contactoPersonal-admin-screen', component: ContactoEspecialObtenerxrutScreenComponent },
    
      { path: 'citas-admin-screen', component: CitasScreenComponent },
      //DERIVACIONES CITA
          { path: 'agregar-citas-admin-screen', component: CitaAgregarScreenComponent },
          { path: 'eliminar-citas-admin-screen', component: CitaEliminarScreenComponent },
          { path: 'modificar-citas-admin-screen', component: CitaModificarScreenComponent },
          { path: 'obtener-citas-admin-screen', component: CitaObtenerScreenComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
