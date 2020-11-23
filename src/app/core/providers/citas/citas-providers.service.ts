import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../../models/citas-card.models';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CitasProvidersService {

  constructor(private httpService: HttpService) { }

  public getAllCitas(): Observable<Cita[]> {
    return this.httpService.get<Cita[]>('/cita/all');
  };

  public addCita(cita: any): Observable<Cita> {
    return this.httpService.post<Cita>('/cita/add', cita);
  };

  public deleteCita(cita: any): Observable<Cita> {
    return this.httpService.post<Cita>('/cita/delete', cita);
  };

  public patchCita(cita: any): Partial<Observable<Cita>>{
    return this.httpService.post<Cita>('/cita/patch', cita);
  };
}
