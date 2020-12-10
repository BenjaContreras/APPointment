import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoPersonalProvidersService } from 'src/app/core/providers/contactoPersonal/contacto-personal-providers.service';

@Component({
  selector: 'app-contacto-especial-modificar-screen',
  templateUrl: './contacto-especial-modificar-screen.component.html',
  styleUrls: ['./contacto-especial-modificar-screen.component.css']
})
export class ContactoEspecialModificarScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  public screenHeight: number;

  constructor(
    private contactoPersonalProviderServices: ContactoPersonalProvidersService
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
        paciente: new FormControl('',[Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        fechaConsulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
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
    this.mensaje="Cita modificada correctamente";
    this.isDivVisible = true;
    return this.contactoPersonalProviderServices.patchContactoPersonal(datosFormulario);
  }

}
