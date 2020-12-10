import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoProvidersService } from 'src/app/core/providers/contacto/contacto-providers.service';

@Component({
  selector: 'app-eliminar-contacto',
  templateUrl: './eliminar-contacto.component.html',
  styleUrls: ['./eliminar-contacto.component.css']
})
export class EliminarContactoComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  public screenHeight: number;

  constructor(
    private contactoProviderServices: ContactoProvidersService
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  
  ngOnInit(): void {
    
    let { height } = window.screen;
    this.screenHeight = height;
  }

  createFormGroup() {
    return new FormGroup(
      {
      mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      nombre: new FormControl('',[Validators.required]),
      rut: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmacion: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    
  }

  get mail() { return this.checkoutForm.get('mail').value; }
  get rut() { return this.checkoutForm.get('rut').value; }
  get nombre() { return this.checkoutForm.get('nombre').value; }
  get telefono() { return this.checkoutForm.get('telefono').value; }
  get password() { return this.checkoutForm.get('password').value; }
  get confirmacion() { return this.checkoutForm.get('confirmacion').value; }

  // GUARDAR DATOS EN ARRAY

  public deleteContacto() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      rut: this.checkoutForm.get('rut').value,
      nombre: this.checkoutForm.get('nombre').value,
      telefono: this.checkoutForm.get('telefono').value,
      password: this.checkoutForm.get('password').value,
      confirmacion: this.checkoutForm.get('confirmacion').value
    };
    try {
      this.mensaje="Su peticion ha sido enviada con exito!";
      this.isDivVisible=true;
      return this.contactoProviderServices.deleteContacto(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al enviar el contacto");
    } 
  }

}
