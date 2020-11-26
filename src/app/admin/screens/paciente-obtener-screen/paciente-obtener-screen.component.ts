import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteProvidersService } from 'src/app/core/providers/paciente/paciente-providers.service';

@Component({
  selector: 'app-paciente-obtener-screen',
  templateUrl: './paciente-obtener-screen.component.html',
  styleUrls: ['./paciente-obtener-screen.component.css']
})
export class PacienteObtenerScreenComponent implements OnInit {

  public paciente$: Observable<Paciente[]>;
  constructor(
    private pacienteProviderServices: PacienteProvidersService,
  ) { 
    this.paciente$ = this.getAllpaciente();
  }

  public screenHeight: number;
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

  getAllpaciente() {
    return this.pacienteProviderServices.getAllPacientes();
  }

}
