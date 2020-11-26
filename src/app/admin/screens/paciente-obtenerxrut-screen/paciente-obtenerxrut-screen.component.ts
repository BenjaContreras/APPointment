import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteProvidersService } from 'src/app/core/providers/paciente/paciente-providers.service';

@Component({
  selector: 'app-paciente-obtenerxrut-screen',
  templateUrl: './paciente-obtenerxrut-screen.component.html',
  styleUrls: ['./paciente-obtenerxrut-screen.component.css']
})
export class PacienteObtenerxrutScreenComponent implements OnInit {

  public paciente$: Observable<Paciente>;
  constructor(
    private pacienteProviderServices: PacienteProvidersService,
  ) { 
    this.paciente$ = this.getpaciente();
  }

  public screenHeight: number;
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = height;
  }

  getpaciente() {
    return this.pacienteProviderServices.getAPaciente();
  }

}
