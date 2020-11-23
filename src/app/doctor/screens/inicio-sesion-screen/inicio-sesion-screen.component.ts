import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorProvidersService } from 'src/app/core/providers/doctor/doctor-providers.service';

@Component({
  selector: 'app-inicio-sesion-screen',
  templateUrl: './inicio-sesion-screen.component.html',
  styleUrls: ['./inicio-sesion-screen.component.css']
})
export class InicioSesionScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor(
    private router: Router,
    private doctorProviderServices: DoctorProvidersService
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
  // temporal
  navegarSesionDoctor() {
    this.router.navigate(['/doctor/sesion-personal-citas-doctor']);
  }

  SesionIniciada(){
    this.router.navigate(['/doctor/sesion-personal-citas-doctor']);
  }

  navegarPersonal(){
    this.router.navigate(['/visitante/inicio-sesion-screen'])
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

  public async postDoctor() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      password: this.checkoutForm.get('password').value,
    };
    console.log(datosFormulario);
    try {
      await this.doctorProviderServices.addDoctor(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    } 
  }

}
