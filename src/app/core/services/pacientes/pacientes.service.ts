import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private router: Router) {
  }

  public navegarAgregarPaciente(){
    this.router.navigate(['/admin/agregar-paciente-agregar-screen']);
  }

  public navegarModificarPaciente(){
    this.router.navigate(['/admin/modificar-paciente-modificar-screen']);
  }

  public navegarEliminarPaciente(){
    this.router.navigate(['/admin/eliminar-paciente-eliminar-screen']);
  }

  public navegarObtenerPaciente(){
    this.router.navigate(['/admin/obtener-paciente-obtener-screen']);
  }

  public navegarObtenerXRutPaciente(){
    this.router.navigate(['/admin/obtenerPorRut-paciente-obtenerxrut-screen']);
  }

}

