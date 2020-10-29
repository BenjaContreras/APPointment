import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarIzqComponent } from './components/nav-bar-izq/nav-bar-izq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsultasCardComponent } from './components/consultas-card/consultas-card.component';
import { EliminarCitaCardComponent } from './components/eliminar-cita-card/eliminar-cita-card.component';
import { AgregarCitaCardComponent } from './components/agregar-cita-card/agregar-cita-card.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { ContactanosScreenComponent } from './screens/contactanos-screen/contactanos-screen.component';


const Components = [
  NavBarComponent,
  NavBarIzqComponent,
  FooterComponent,
  ConsultasCardComponent,
  EliminarCitaCardComponent,
  AgregarCitaCardComponent,
  InicioScreenComponent,
  RegistrarseScreenComponent,
  ContactanosScreenComponent
];

@NgModule({
  declarations: [ ...Components],
  imports: [
    CommonModule
  ],
  exports: [ ...Components]
})
export class SharedModule { }
