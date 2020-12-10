import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  constructor(private router: Router) {
  }

  public navegarAgregarDoctor(){
    this.router.navigate(['/admin/agregar-doctor-admin-screen']);
  }

  public navegarModificarDoctor(){
    this.router.navigate(['/admin/modificar-doctor-admin-screen']);
  }

  public navegarEliminarDoctor(){
    this.router.navigate(['/admin/eliminar-doctor-admin-screen']);
  }

  public navegarObtenerDoctor(){
    this.router.navigate(['/admin/obtener-doctor-admin-screen']);
  }

  public navegarObtenerXRutDoctor(){
    this.router.navigate(['/admin/obtenerPorRut-doctor-admin-screen']);
  }

}
