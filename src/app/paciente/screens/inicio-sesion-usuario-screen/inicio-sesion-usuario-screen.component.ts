import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteProvidersService } from 'src/app/core/providers/paciente/paciente-providers.service';

@Component({
  selector: 'app-inicio-sesion-usuario-screen',
  templateUrl: './inicio-sesion-usuario-screen.component.html',
  styleUrls: ['./inicio-sesion-usuario-screen.component.css']
})
export class InicioSesionUsuarioScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor(
    private router: Router,
    private pacienteProviderServices: PacienteProvidersService
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    });
  }

  SesionIniciada(){
    this.router.navigate(['/paciente/sesion-personal-citas-paciente']);
  }

  navegarPersonal(){
    this.router.navigate(['/doctor/inicio-sesion-screen'])
  }

  navegarUsuario(){
    this.router.navigate(['/paciente/inicio-sesion-usuario-screen'])
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get mail() { return this.checkoutForm.get('mail').value; }
  get password() { return this.checkoutForm.get('password').value; }

  // GUARDAR DATOS EN ARRAY

  public async postPaciente() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      password: this.checkoutForm.get('password').value,
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
