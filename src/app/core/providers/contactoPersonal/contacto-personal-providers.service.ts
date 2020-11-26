import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoPersonal } from '../../models/contactoPersonal.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoPersonalProvidersService {

  constructor(private httpService: HttpService) { }

  public getAllContactoPersonals(): Observable<ContactoPersonal[]> {
    return this.httpService.get<ContactoPersonal[]>('/contactoPersonal/all');
  };

  public addContactoPersonal(ContactoPersonal: any): Observable<ContactoPersonal> {
    return this.httpService.post<ContactoPersonal>('/contactoPersonal/add', ContactoPersonal);
  };

  public getAContactoPersonal(): Observable<ContactoPersonal> {
    return this.httpService.get<ContactoPersonal>('/contactoPersonal/rut');
  }; //Busca ContactoPersonal por rut

  public deleteContactoPersonal(ContactoPersonal: any): Observable<ContactoPersonal> {
    return this.httpService.post<ContactoPersonal>('/contactoPersonal/delete', ContactoPersonal);
  };

  public patchContactoPersonal(ContactoPersonal: any, idContactoP): Partial<Observable<ContactoPersonal>>{
    return this.httpService.post<ContactoPersonal>('/contactoPersonal/' + idContactoP, ContactoPersonal);
  };
}
