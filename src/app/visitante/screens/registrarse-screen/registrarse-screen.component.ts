import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';
import { PacienteProvidersService } from 'src/app/core/providers/paciente/paciente-providers.service';

@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.less']
})
export class RegistrarseScreenComponent implements OnInit {

  //email = new FormControl('', [Validators.required, Validators.email]);
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  private datosFormulario: any[6];


  constructor(
    private router: Router,
    private pacienteProviderServices: PacienteProvidersService
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/screen-home-ingresado']);
  }

  createFormGroup() {
    return new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      rut: new FormControl('',[Validators.required]),
      password2: new FormControl('',[Validators.required]),
    });
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get mail() { return this.checkoutForm.get('mail'); }
  get password() { return this.checkoutForm.get('password'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get apellido() { return this.checkoutForm.get('apellido'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get password2() { return this.checkoutForm.get('password2'); }

  // GUARDAR DATOS EN ARRAY

  public async postPaciente() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      password: this.checkoutForm.get('password').value,
      nombre: this.checkoutForm.get('nombre').value,
      apellido: this.checkoutForm.get('apellido').value,
      rut: this.checkoutForm.get('rut').value,
      password2: this.checkoutForm.get('password2').value
    };
    console.log(datosFormulario);
    try {
      await this.pacienteProviderServices.addPaciente(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    }
  }



}
