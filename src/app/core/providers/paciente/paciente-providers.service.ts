import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../models/paciente.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteProvidersService {

  constructor(private httpService: HttpService) { }

  public getAllPacientes(): Observable<Paciente[]> {
    return this.httpService.get<Paciente[]>('/paciente/all');
  };

  public addPaciente(Paciente: any): Observable<Paciente> {
    return this.httpService.post<Paciente>('/paciente/add', Paciente);
  };

  public getAPaciente(): Observable<Paciente> {
    return this.httpService.get<Paciente>('/paciente/rut');
  }; //Busca Paciente por rut

  public deletePaciente(Paciente: any): Observable<Paciente> {
    return this.httpService.post<Paciente>('/paciente/delete', Paciente);
  };

  public patchPaciente(Paciente: any): Partial<Observable<Paciente>>{ //AGREGAR RECEPCION DE ID
    return this.httpService.post<Paciente>('/paciente/', Paciente);
  };
}
