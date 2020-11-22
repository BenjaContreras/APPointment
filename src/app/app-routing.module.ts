import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioScreenComponent } from './visitante/screens/inicio-screen/inicio-screen.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'visitante/inicio-screen',
    pathMatch: 'full'
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module')
      .then(DoctorModule => DoctorModule.DoctorModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module')
      .then(PacienteModule => PacienteModule.PacienteModule)
  },
  {
    path: 'visitante',
    loadChildren: () => import('./visitante/visitante.module')
      .then(VisitanteModule => VisitanteModule.VisitanteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(AdminModule => AdminModule.AdminModule)
  },
  {
    path: '**',
    component: InicioScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
