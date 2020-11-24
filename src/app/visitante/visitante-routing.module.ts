import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactanosScreenComponent } from './screens/contactanos-screen/contactanos-screen.component';
import { EncuentranosScreenComponent } from './screens/encuentranos-screen/encuentranos-screen/encuentranos-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { VisitanteComponent } from './visitante.component';

const routes: Routes = [
  {
    path: '',
    component: VisitanteComponent,
    children: [
      { path: 'inicio-screen', component: InicioScreenComponent },
      { path: 'contactanos-screen', component: ContactanosScreenComponent },
      { path: 'registrarse-screen', component: RegistrarseScreenComponent },
      { path: 'encuentranos-screen', component: EncuentranosScreenComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
