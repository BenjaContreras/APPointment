import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private router: Router) {
  }

  public navegarAgregarContacto(){
    this.router.navigate(['/admin/agregar-contacto-admin-screen']);
  }

  public navegarModificarContacto(){
    this.router.navigate(['/admin/modificar-contacto-admin-screen']);
  }

  public navegarEliminarContacto(){
    this.router.navigate(['/admin/eliminar-contacto-admin-screen']);
  }

  public navegarObtenerContacto(){
    this.router.navigate(['/admin/obtener-contacto-admin-screen']);
  }

}
