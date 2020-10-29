import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente.component';
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
      { path: '/sesion-personal', component: SesionPersonalPacienteComponent },
      { path: '/sesion-personal-ayuda', component: SesionPersonalAyudaPacienteComponent },
      { path: '/sesion-personal-citas', component: SesionPersonalCitasPacienteComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
