import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/core/models/citas-card.models';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-agregar-cita-card',
  templateUrl: './agregar-cita-card.component.html',
  styleUrls: ['./agregar-cita-card.component.css']
})
export class AgregarCitaCardComponent implements OnInit {

  public citaId: number;
  public citaNew: Cita;

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(
    private citasProviderServices: CitasProvidersService
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
    this.mensaje="Cita agregada correctamente";
    this.isDivVisible = true;
    this.checkoutForm.reset();
  }

  get paciente() { return this.checkoutForm.get('paciente').value; }
  get descripcion() { return this.checkoutForm.get('descripcion').value; }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value; }

  // GUARDAR DATOS EN ARRAY

  public async postCita() { 
    let datosFormulario = {
      paciente: this.checkoutForm.get('paciente').value,
      descripcion: this.checkoutForm.get('descripcion').value,
      fechaConsulta: this.checkoutForm.get('fechaConsulta').value,
      
    };
    try {
      await this.citasProviderServices.postCita(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    } 
  }

}

