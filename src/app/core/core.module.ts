import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasService } from './services/citas/citas.service';
import { UsuariosService } from './services/usuarios/usuarios.service';


const Services = [
  CitasService,
  UsuariosService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...Services]
})
export class CoreModule { }
