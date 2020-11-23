import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorProvidersService } from 'src/app/core/providers/doctor/doctor-providers.service';

@Component({
  selector: 'app-sesion-personal-ayuda-doctor',
  templateUrl: './sesion-personal-ayuda-doctor.component.html',
  styleUrls: ['./sesion-personal-ayuda-doctor.component.less']
})
export class SesionPersonalAyudaDoctorComponent implements OnInit {

  public screenHeight: number;
  checkoutForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;

  constructor(
    private router: Router,
    private doctorProviderServices: DoctorProvidersService
  ) {
    this.checkoutForm = this.createFormGroup();
  }


  ngOnInit(): void {

    let { height } = window.screen;

    this.screenHeight = 800;
  }

  createFormGroup() {
    return new FormGroup(
      {
        mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
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

  get mail() { return this.checkoutForm.get('mail'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get apellido() { return this.checkoutForm.get('apellido'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get consulta() { return this.checkoutForm.get('consulta'); }

  // GUARDAR DATOS EN ARRAY

  public patchDoctor() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      nombre: this.checkoutForm.get('nombre').value,
      apellido: this.checkoutForm.get('apellido').value,
      rut: this.checkoutForm.get('rut').value,
      consulta: this.checkoutForm.get('consulta').value,
    };
    console.log(datosFormulario);
    return this.doctorProviderServices.patchDoctor(datosFormulario);
  }

}
