import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoPersonalProvidersService } from 'src/app/core/providers/contactoPersonal/contacto-personal-providers.service';

@Component({
  selector: 'app-sesion-personal-ayuda-paciente',
  templateUrl: './sesion-personal-ayuda-paciente.component.html',
  styleUrls: ['./sesion-personal-ayuda-paciente.component.less']
})
export class SesionPersonalAyudaPacienteComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(
    private router: Router,
    private contactoEspecialProviderService: ContactoPersonalProvidersService
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
      mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      rut: new FormControl('', [Validators.required]),
      consulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Datos enviados";
    this.isDivVisible=true;
  }

  get mail() { return this.checkoutForm.get('mail'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get apellido() { return this.checkoutForm.get('apellido'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get consulta() { return this.checkoutForm.get('consulta'); }

  // GUARDAR DATOS EN ARRAY

  public async postContacto() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      nombre: this.checkoutForm.get('nombre').value,
      apellido: this.checkoutForm.get('apellido').value,
      rut: this.checkoutForm.get('rut').value,
      consulta: this.checkoutForm.get('consulta').value
    };
    console.log(datosFormulario);
    try {
      await this.contactoEspecialProviderService.addContactoPersonal(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    }
  }

}
