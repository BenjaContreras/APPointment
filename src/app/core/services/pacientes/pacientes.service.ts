import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private router: Router) {
  }

  public navegarAgregarPaciente(){
    this.router.navigate(['/admin/agregar-paciente-admin-screen']);
  }

  public navegarModificarPaciente(){
    this.router.navigate(['/admin/modificar-paciente-admin-screen']);
  }

  public navegarEliminarPaciente(){
    this.router.navigate(['/admin/eliminar-paciente-admin-screen']);
  }

  public navegarObtenerPaciente(){
    this.router.navigate(['/admin/obtener-paciente-admin-screen']);
  }

  public navegarObtenerXRutPaciente(){
    this.router.navigate(['/admin/obtenerPorRut-paciente-admin-screen']);
  }

}

