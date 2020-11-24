import { Component, OnInit } from '@angular/core';
import { DoctorProvidersService } from 'src/app/core/providers/doctor/doctor-providers.service';

@Component({
  selector: 'app-sesion-personal-doctor',
  templateUrl: './sesion-personal-doctor.component.html',
  styleUrls: ['./sesion-personal-doctor.component.less']
})
export class SesionPersonalDoctorComponent implements OnInit {

  public URLfoto: string;
  public ModificarNombres: string;
  public ModificarApellidos: string;
  public ModificarEmail: string;
  public ModificarFono: string;
  public ModificarContrasena: string;
  public ModificarRut: string;
  public screenHeight: number;

  constructor(
    private doctorProviderServices: DoctorProvidersService
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
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarNombres = 'disabled'
    ]
  }

  modificaApellidos() {
    if (this.ModificarApellidos === 'disabled') {
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarApellidos = 'disabled'
    ]
  }

  modificaEmail() {
    if (this.ModificarEmail === 'disabled') {
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarEmail = 'disabled'
    ]
  }

  modificaFono() {
    if (this.ModificarFono === 'disabled') {
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarFono = 'disabled'
    ]
  }

  modificaContrasena() {
    if (this.ModificarContrasena === 'disabled') {
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarContrasena = 'disabled'
    ]
  }

  modificaRut() {
    if (this.ModificarRut === 'disabled') {
      let doctor = this.doctorProviderServices.getADoctor();
      return this.doctorProviderServices.patchDoctor(doctor);
    } else[
      this.ModificarRut = 'disabled'
    ]
  }


  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = 800;
  }
}