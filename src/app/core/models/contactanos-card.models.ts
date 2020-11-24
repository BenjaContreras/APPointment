export interface Contacto {
  _id: string | number;
  nombrePaciente: string;
  apellidoPciente: string;
  rut: string;
  email: string;
  descripcion: string;
  fechaSolicitud: Date;
}
