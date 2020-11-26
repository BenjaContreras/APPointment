import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '../../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[];
  constructor(private router: Router) {
  }
  
  public getAllCitas(): Cita[] {
    return this.citas;
  }

  public navegarAgregarCita(){
    this.router.navigate(['/admin/agregar-citas-admin-screen']);
  }

  public navegarModificarCita(){
    this.router.navigate(['/admin/modificar-citas-admin-screen']);
  }

  public navegarEliminarCita(){
    this.router.navigate(['/admin/eliminar-citas-admin-screen']);
  }

  public navegarObtenerCitas(){
    this.router.navigate(['/admin/obtener-citas-admin-screen']);
  }

}