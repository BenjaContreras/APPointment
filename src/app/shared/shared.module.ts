import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarIzqComponent } from './components/nav-bar-izq/nav-bar-izq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsultasCardComponent } from './components/consultas-card/consultas-card.component';
import { EliminarCitaCardComponent } from './components/eliminar-cita-card/eliminar-cita-card.component';
import { AgregarCitaCardComponent } from './components/agregar-cita-card/agregar-cita-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitasProvidersService } from '../core/providers/citas/citas-providers.service';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin/nav-bar-admin.component';
import { NavBarIzqAdminComponent } from './components/nav-bar-izq-admin/nav-bar-izq-admin/nav-bar-izq-admin.component';

const Components = [
  NavBarComponent,
  NavBarIzqComponent,
  FooterComponent,
  ConsultasCardComponent,
  EliminarCitaCardComponent,
  AgregarCitaCardComponent,
  NavBarAdminComponent,
  NavBarIzqAdminComponent
];

@NgModule({
  declarations: [ ...Components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CitasProvidersService,
  ],
  exports: [ ...Components]
})
export class SharedModule { }
