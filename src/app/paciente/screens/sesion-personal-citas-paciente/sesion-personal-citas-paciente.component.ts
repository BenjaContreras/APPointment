import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/core/models/cita.model';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-sesion-personal-citas-paciente',
  templateUrl: './sesion-personal-citas-paciente.component.html',
  styleUrls: ['./sesion-personal-citas-paciente.component.css']
})
export class SesionPersonalCitasPacienteComponent implements OnInit {

  public citas$: Observable<Cita[]>;
  public citaSeleccionada: Cita;
  public id: string | number;
  public screenHeight: number;
  public opciones: number;

  constructor(
    private citasProviderServices: CitasProvidersService
  ) {
    this.citaSeleccionada = null;
    this.citas$ = this.getCitas();
  }
  
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

  setOption(numero: number) { 
    this.opciones = numero;
  }

  seleccionarCita(cita: Cita) {
    this.citaSeleccionada = cita;
  }

  getCitas() {
    return this.citasProviderServices.getAllCitas();
  }
}