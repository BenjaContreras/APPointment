import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactosEspecialesService {

  constructor(private router: Router) {
  }

  public navegarAgregarContactoPersonal(){
    this.router.navigate(['/admin/agregar-contactoPersonal-agregar-screen']);
  }

  public navegarModificarContactoPersonal(){
    this.router.navigate(['/admin/modificar-contactoPersonal-modificar-screen']);
  }

  public navegarEliminarContactoPersonal(){
    this.router.navigate(['/admin/eliminar-ontactoPersonal-eliminar-screen']);
  }

  public navegarObtenerContactoPersonal(){
    this.router.navigate(['/admin/obtener-contactoPersonal-obtener-screen']);
  }

  public navegarObtenerXRutContactoPersonal(){
    this.router.navigate(['/admin/obtenerPorRut-contactoPersonal-obtenerxrut-screen']);
  }

}
