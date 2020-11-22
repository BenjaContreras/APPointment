import { Injectable } from '@angular/core';
import { Cita } from '../../models/citas-card.models';
import { CITAS } from './CITAS.const';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[];
  constructor() {
    this.citas = CITAS
  }
  
  public getAllCitas(): Cita[] {
    return this.citas;
  }

  public agregarCita(id: number, citaAgregar: Cita) {
    this.citas.concat(citaAgregar);
    this.citas[this.citas.length]._id = id;
    this.citas[this.citas.length].estadoCita = "Reciente";
  }

  public modificarCita(id: number, citaModificar: Partial<Cita>) {
    for (let i = 0; i < this.citas.length; i++) {
      if (id === this.citas[i]._id) {
        if (citaModificar.descripcion) {
          this.citas[i].descripcion=citaModificar.descripcion
        }
        if (citaModificar.nombrePaciente) {
          this.citas[i].nombrePaciente=citaModificar.nombrePaciente
        }
        if (citaModificar.fechaSolicitud) {
          this.citas[i].fechaSolicitud=citaModificar.fechaSolicitud
        }
        if (citaModificar.estadoCita) {
          this.citas[i].estadoCita=citaModificar.estadoCita
        }
        if (citaModificar.motivoCancelacion) {
          this.citas[i].motivoCancelacion=citaModificar.motivoCancelacion
        }
        if (citaModificar.personaCancelar) {
          this.citas[i].personaCancelar=citaModificar.personaCancelar
        }
      };
    }
  }

  public eliminarCita(id: number) {
    this.citas.splice(0,id);
  }

}