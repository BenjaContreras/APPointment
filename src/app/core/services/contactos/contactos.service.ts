import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private router: Router) {
  }

  public navegarAgregarContacto(){
    this.router.navigate(['/admin/agregar-contacto-agregar-screen']);
  }

  public navegarModificarContacto(){
    this.router.navigate(['/admin/modificar-contacto-modificar-screen']);
  }

  public navegarEliminarContacto(){
    this.router.navigate(['/admin/eliminar-contacto-eliminar-screen']);
  }

  public navegarObtenerContacto(){
    this.router.navigate(['/admin/obtener-contacto-obtener-screen']);
  }

}
