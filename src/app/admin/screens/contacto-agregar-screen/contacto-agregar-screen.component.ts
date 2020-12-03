import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public screenHeight: number;

  constructor(
    private contactosProviderServices: ContactoProvidersService
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
  get descripcion() { return this.checkoutForm.get('descripcion').value; }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value; }

  // GUARDAR DATOS EN ARRAY

  public async addContacto() { 
    let datosFormulario = {
      paciente: this.checkoutForm.get('paciente').value,
      descripcion: this.checkoutForm.get('descripcion').value,
      fechaConsulta: this.checkoutForm.get('fechaConsulta').value,
    };
    try {
      this.mensaje="Cita agregada correctamente";
      this.isDivVisible = true;
      await this.contactosProviderServices.addContacto(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir la Cita");
    } 
  }
}
