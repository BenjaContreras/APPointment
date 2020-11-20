import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion-usuario-screen',
  templateUrl: './inicio-sesion-usuario-screen.component.html',
  styleUrls: ['./inicio-sesion-usuario-screen.component.css']
})
export class InicioSesionUsuarioScreenComponent implements OnInit {

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

  SesionIniciada(){
    this.router.navigate(['/paciente/sesion-personal-paciente']);
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

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }


}
