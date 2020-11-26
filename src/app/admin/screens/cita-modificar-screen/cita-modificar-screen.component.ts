import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-cita-modificar-screen',
  templateUrl: './cita-modificar-screen.component.html',
  styleUrls: ['./cita-modificar-screen.component.css']
})
export class CitaModificarScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  public screenHeight: number;
  
  @Input()
  public citaId: number;


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
  get descripcion() { return this.checkoutForm.get('descripcion').value }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value }

  // GUARDAR DATOS EN ARRAY

  public patchCita() { 
    let datosFormulario = {
      paciente: this.checkoutForm.get('paciente').value,
      descripcion: this.checkoutForm.get('descripcion').value,
      fechaConsulta: this.checkoutForm.get('fechaConsulta').value,
    };
    this.mensaje="Cita modificada correctamente";
    this.isDivVisible = true;
    return this.citasProviderServices.patchCita(datosFormulario);
  }

}
