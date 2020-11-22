import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion-personal-ayuda-paciente',
  templateUrl: './sesion-personal-ayuda-paciente.component.html',
  styleUrls: ['./sesion-personal-ayuda-paciente.component.less']
})
export class SesionPersonalAyudaPacienteComponent implements OnInit {

  public screenHeight: number;
  checkoutForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;

  constructor(private router: Router) {
    this.checkoutForm = this.createFormGroup();
  }


  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = 800;
  }

  createFormGroup() {
    return new FormGroup(
      {
        usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        rut: new FormControl('', [Validators.required]),
        consulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit() {
    this.mensaje = "Datos enviados";
    this.isDivVisible = true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get apellido() { return this.checkoutForm.get('apellido'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get consulta() { return this.checkoutForm.get('consulta'); }

}
