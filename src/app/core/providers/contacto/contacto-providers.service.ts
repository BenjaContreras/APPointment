import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../../models/contacto.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoProvidersService {

  constructor(private httpService: HttpService) { }

  public getAllContactos(): Observable<Contacto[]> {
    return this.httpService.get<Contacto[]>('/contacto/all');
  };

  public addContacto(Contacto: any): Observable<Contacto> {
    return this.httpService.post<Contacto>('/contacto/add', Contacto);
  };

  public getAContacto(): Observable<Contacto> {
    return this.httpService.get<Contacto>('/contacto/rut');
  }; //Busca Contacto por rut

  public deleteContacto(Contacto: any): Observable<Contacto> {
    return this.httpService.post<Contacto>('/contacto/delete', Contacto);
  };

  public patchContacto(Contacto: any): Partial<Observable<Contacto>>{
    return this.httpService.post<Contacto>('/contacto/patch', Contacto);
  };
}
