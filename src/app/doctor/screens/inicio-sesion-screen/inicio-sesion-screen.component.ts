import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion-screen',
  templateUrl: './inicio-sesion-screen.component.html',
  styleUrls: ['./inicio-sesion-screen.component.css']
})
export class InicioSesionScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
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

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }

}
