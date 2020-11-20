import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { SesionPersonalAyudaDoctorComponent } from './screens/sesion-personal-ayuda-doctor/sesion-personal-ayuda-doctor.component';
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';

const routes: Routes = [

  {
    path: '',
    component: InicioSesionScreenComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: DoctorComponent,
    children: [
      { path: 'inicio-sesion-screen', component: InicioSesionScreenComponent },
      { path: 'sesion-personal-doctor', component: SesionPersonalDoctorComponent },
      { path: 'sesion-personal-ayuda-doctor', component: SesionPersonalAyudaDoctorComponent },
      { path: 'sesion-personal-citas-doctor', component: SesionPersonalCitasDoctorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
