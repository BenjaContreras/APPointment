import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoProvidersService } from 'src/app/core/providers/contacto/contacto-providers.service';

@Component({
  selector: 'app-contacto-agregar-screen',
  templateUrl: './contacto-agregar-screen.component.html',
  styleUrls: ['./contacto-agregar-screen.component.css']
})
export class ContactoAgregarScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(
    private router: Router,
    private contactoProviderService: ContactoProvidersService
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
      this.mensaje="Contacto agregado correctamente";
      this.isDivVisible=true;
      await this.contactoProviderService.addContacto(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    }
  }

}
