import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CitasScreenComponent } from './screens/cita-screen/citas-screen/citas-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen/contacto-screen.component';
import { ContactoEspecialScreenComponent } from './screens/contactoEspecial-screen/contacto-especial-screen/contacto-especial-screen.component';
import { DoctoresScreenComponent } from './screens/doctor-screen/doctores-screen/doctores-screen.component';
import { InicioAdminComponent } from './screens/inicio-admin/inicio-admin/inicio-admin.component';
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
      { path: 'doctor-admin-screen', component: DoctoresScreenComponent },
      { path: 'contacto-admin-screen', component: ContactoScreenComponent },
      { path: 'contactoPersonal-admin-screen', component: ContactoEspecialScreenComponent },
      { path: 'citas-admin-screen', component: CitasScreenComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
