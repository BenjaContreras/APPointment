import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.less']
})
export class ModificarCitaComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  @Input()
  public citaId: number;


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
    this.mensaje="Cita modificada correctamente";
    this.isDivVisible = true;
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
    console.log(datosFormulario);
    return this.citasProviderServices.patchCita(datosFormulario);
  }
}
