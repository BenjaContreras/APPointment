import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-personal-doctor',
  templateUrl: './sesion-personal-doctor.component.html',
  styleUrls: ['./sesion-personal-doctor.component.css']
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

  constructor() {
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
      this.ModificarNombres = ''
    } else[
      this.ModificarNombres = 'disabled'
    ]
  }

  modificaApellidos() {
    if (this.ModificarApellidos === 'disabled') {
      this.ModificarApellidos = ''
    } else[
      this.ModificarApellidos = 'disabled'
    ]
  }

  modificaEmail() {
    if (this.ModificarEmail === 'disabled') {
      this.ModificarEmail = ''
    } else[
      this.ModificarEmail = 'disabled'
    ]
  }

  modificaFono() {
    if (this.ModificarFono === 'disabled') {
      this.ModificarFono = ''
    } else[
      this.ModificarFono = 'disabled'
    ]
  }

  modificaContrasena() {
    if (this.ModificarContrasena === 'disabled') {
      this.ModificarContrasena = ''
    } else[
      this.ModificarContrasena = 'disabled'
    ]
  }

  modificaRut() {
    if (this.ModificarRut === 'disabled') {
      this.ModificarRut = ''
    } else[
      this.ModificarRut = 'disabled'
    ]
  }


  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = height;
  }
}
