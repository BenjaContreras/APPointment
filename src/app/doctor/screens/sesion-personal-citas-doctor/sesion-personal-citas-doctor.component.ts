import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/core/models/cita.model';
import { CitasProvidersService } from 'src/app/core/providers/citas/citas-providers.service';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-sesion-personal-citas-doctor',
  templateUrl: './sesion-personal-citas-doctor.component.html',
  styleUrls: ['./sesion-personal-citas-doctor.component.css']
})
export class SesionPersonalCitasDoctorComponent implements OnInit {

  public citas$: Observable<Cita[]>;
  public citaSeleccionada: Cita;
  public id: string | number;
  public screenHeight: number;
  public opciones: number;

  constructor(
    private citasProviderServices: CitasProvidersService
  ) {
    this.citaSeleccionada = null;
    this.citas$ = this.getAllCitas();
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

  getAllCitas(): Observable<Cita[]> {
    return this.citasProviderServices.getAllCitas();
  }

}