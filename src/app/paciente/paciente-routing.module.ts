import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente.component';
import { ContactanosEspecialPacienteComponent } from './screens/contactanos-especial-paciente/contactanos-especial-paciente.component';
import { InicioSesionUsuarioScreenComponent } from './screens/inicio-sesion-usuario-screen/inicio-sesion-usuario-screen.component';
import { SesionPersonalAyudaPacienteComponent } from './screens/sesion-personal-ayuda-paciente/sesion-personal-ayuda-paciente.component';
import { SesionPersonalCitasPacienteComponent } from './screens/sesion-personal-citas-paciente/sesion-personal-citas-paciente.component';
import { SesionPersonalPacienteComponent } from './screens/sesion-personal-paciente/sesion-personal-paciente.component';

const routes: Routes = [
  
  {
    path: '',
    component: InicioSesionUsuarioScreenComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: PacienteComponent,
    children: [
      { path: 'inicio-sesion-usuario-screen', component: InicioSesionUsuarioScreenComponent },
      { path: 'sesion-personal-paciente', component: SesionPersonalPacienteComponent },
      { path: 'sesion-personal-ayuda-paciente', component: SesionPersonalAyudaPacienteComponent },
      { path: 'sesion-personal-citas-paciente', component: SesionPersonalCitasPacienteComponent },
      { path: 'contactanos-especial-paciente', component: ContactanosEspecialPacienteComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
