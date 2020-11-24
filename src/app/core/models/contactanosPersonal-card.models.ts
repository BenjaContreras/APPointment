export interface ContactoPersonal {
  _id: string | number;
  nombrePaciente: string;
  email: string;
  contrasena: string;
  telefono: string;
  confirmacion?: boolean;
}
