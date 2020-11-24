import { Component, OnInit } from '@angular/core';
import { PacienteProvidersService } from 'src/app/core/providers/paciente/paciente-providers.service';

@Component({
  selector: 'app-sesion-personal-paciente',
  templateUrl: './sesion-personal-paciente.component.html',
  styleUrls: ['./sesion-personal-paciente.component.css']
})
export class SesionPersonalPacienteComponent implements OnInit {

  public URLfoto: string;
  public ModificarNombres: string;
  public ModificarApellidos: string;
  public ModificarEmail: string;
  public ModificarFono: string;
  public ModificarContrasena: string;
  public ModificarRut: string;
  public screenHeight: number;

  constructor(
    private pacienteProviderServices: PacienteProvidersService
  ) {
    this.URLfoto = 'https://falabella.scene7.com/is/image/Falabella/12005138_1?wid=1500&hei=1500&qlt=70';
    this.ModificarNombres = 'disabled';
    this.ModificarApellidos = 'disabled';
    this.ModificarEmail = 'disabled';
    this.ModificarFono = 'disabled';
    this.ModificarContrasena = 'disabled';
    this.ModificarRut = 'disabled';
  }

  modificaNombres() {
    if (this.ModificarNombres === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarNombres = 'disabled'
    ]
  }

  modificaApellidos() {
    if (this.ModificarApellidos === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarApellidos = 'disabled'
    ]
  }

  modificaEmail() {
    if (this.ModificarEmail === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarEmail = 'disabled'
    ]
  }

  modificaFono() {
    if (this.ModificarFono === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarFono = 'disabled'
    ]
  }

  modificaContrasena() {
    if (this.ModificarContrasena === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarContrasena = 'disabled'
    ]
  }

  modificaRut() {
    if (this.ModificarRut === 'disabled') {
      let paciente = this.pacienteProviderServices.getAPaciente();
      return this.pacienteProviderServices.patchPaciente(paciente);
    } else[
      this.ModificarRut = 'disabled'
    ]
  }


  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = 800;
  }
}