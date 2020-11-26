import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  constructor(private router: Router) {
  }

  public navegarAgregarDoctor(){
    this.router.navigate(['/admin/agregar-doctor-agregar-screen']);
  }

  public navegarModificarDoctor(){
    this.router.navigate(['/admin/modificar-doctor-modificar-screen']);
  }

  public navegarEliminarDoctor(){
    this.router.navigate(['/admin/eliminar-doctor-eliminar-screen']);
  }

  public navegarObtenerDoctor(){
    this.router.navigate(['/admin/obtener-doctor-obtener-screen']);
  }

  public navegarObtenerXRutDoctor(){
    this.router.navigate(['/admin/obtenerPorRut-doctor-obtenerxrut-screen']);
  }

}
