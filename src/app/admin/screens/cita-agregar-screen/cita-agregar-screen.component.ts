import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-cita-agregar-screen',
  templateUrl: './cita-agregar-screen.component.html',
  styleUrls: ['./cita-agregar-screen.component.css']
})
export class CitaAgregarScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  public screenHeight: number;

  constructor(
    private citasProviderServices: CitasProvidersService
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

  public async postCita() { 
    let datosFormulario = {
      paciente: this.checkoutForm.get('paciente').value,
      descripcion: this.checkoutForm.get('descripcion').value,
      fechaConsulta: this.checkoutForm.get('fechaConsulta').value,
    };
    try {
      this.mensaje="Cita agregada correctamente";
      this.isDivVisible = true;
      await this.citasProviderServices.postCita(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir la Cita");
    } 
  }

}
