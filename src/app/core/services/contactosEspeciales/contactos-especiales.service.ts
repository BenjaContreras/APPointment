import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactosEspecialesService {

  constructor(private router: Router) {
  }

  public navegarAgregarContactoPersonal(){
    this.router.navigate(['/admin/agregar-contactoPersonal-admin-screen']);
  }

  public navegarModificarContactoPersonal(){
    this.router.navigate(['/admin/modificar-contactoPersonal-admin-screen']);
  }

  public navegarEliminarContactoPersonal(){
    this.router.navigate(['/admin/eliminar-contactoPersonal-admin-screen']);
  }

  public navegarObtenerContactoPersonal(){
    this.router.navigate(['/admin/obtener-contactoPersonal-admin-screen']);
  }

  public navegarObtenerXRutContactoPersonal(){
    this.router.navigate(['/admin/obtenerPorRut-contactoPersonal-admin-screen']);
  }

}
