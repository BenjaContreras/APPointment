import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactanosScreenComponent } from './shared/screens/contactanos-screen/contactanos-screen.component';
import { InicioScreenComponent } from './shared/screens/inicio-screen/inicio-screen.component';
import { RegistrarseScreenComponent } from './shared/screens/registrarse-screen/registrarse-screen.component';

const routes: Routes = [

  {
    path: '',
    component: InicioScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(DoctorModule => DoctorModule.DoctorModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module').then(PacienteModule => PacienteModule.PacienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
