import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/doctor.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorProvidersService {

  constructor(private httpService: HttpService) { }

  public getAllDoctors(): Observable<Doctor[]> {
    return this.httpService.get<Doctor[]>('/doctor/all');
  };

  public addDoctor(Doctor: any): Observable<Doctor> {
    return this.httpService.post<Doctor>('/doctor/add', Doctor);
  };

  public getADoctor(): Observable<Doctor> {
    return this.httpService.get<Doctor>('/doctor/rut');
  }; //Busca doctor por rut

  public deleteDoctor(Doctor: any): Observable<Doctor> {
    return this.httpService.post<Doctor>('/doctor/delete', Doctor);
  };

  public patchDoctor(Doctor: any, idDoctor: any): Partial<Observable<Doctor>>{
    return this.httpService.post<Doctor>('/doctor/' + idDoctor, Doctor);
  };
}