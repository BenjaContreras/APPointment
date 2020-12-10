import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoProvidersService } from 'src/app/core/providers/contacto/contacto-providers.service';

@Component({
  selector: 'app-modificar-contacto-admin',
  templateUrl: './modificar-contacto.component.html',
  styleUrls: ['./modificar-contacto.component.css']
})
export class ModificarContactoComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor(
    private contactoProviderServices: ContactoProvidersService
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
        paciente: new FormControl('',[Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        fechaConsulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Contacto modificada correctamente";
    this.isDivVisible = true;
    this.checkoutForm.reset();
  }

  get paciente() { return this.checkoutForm.get('paciente').value; }
  get descripcion() { return this.checkoutForm.get('descripcion').value }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value }

  // GUARDAR DATOS EN ARRAY

  public patchContacto() { 
    let datosFormulario = {
      paciente: this.checkoutForm.get('paciente').value,
      descripcion: this.checkoutForm.get('descripcion').value,
      fechaConsulta: this.checkoutForm.get('fechaConsulta').value,
    };
    try {
      this.mensaje="Contacto modificada correctamente";
      this.isDivVisible = true;
      return this.contactoProviderServices.patchContacto(datosFormulario);
    } catch (error) {
      alert("Error al modificar el contacto");
    }
    
  }

}
