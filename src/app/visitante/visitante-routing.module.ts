import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactanosScreenComponent } from './screens/contactanos-screen/contactanos-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { VisitanteComponent } from './visitante.component';

const routes: Routes = [
  {
    path: '',
    component: VisitanteComponent,
    children: [
      { path: 'contactanos-screen', component: ContactanosScreenComponent },
      { path: 'registrarse-screen', component: RegistrarseScreenComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
