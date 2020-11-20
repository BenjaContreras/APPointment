import { Cita } from "../../models/citas-card.models";


export const CITAS: Cita[] = [
  { 
    _id: 1,
    nombrePaciente: "Jose",
    fechaSolicitud: new Date(),
    descripcion: "Dolor estomacal y vomitos",
    estadoCita: "Reciente",
  },
  { 
    _id: 2,
    nombrePaciente: "Juan",
    fechaSolicitud: new Date(),
    descripcion: "Toz grave con presentacino de flema",
    estadoCita: "Cancelada",
    motivoCancelacion: "No asistió",
    personaCancelar: "Medico",
  },
  { 
    _id: 3,
    nombrePaciente: "Pedro",
    fechaSolicitud: new Date(),
    descripcion: "Fiebre severa y dolor de cabeza",
    estadoCita: "Pendiente",
  },
  { 
    _id: 4,
    nombrePaciente: "Enrique",
    fechaSolicitud: new Date(),
    descripcion: "Vomito repentino y nauceas",
    estadoCita: "Realizada",
  },
  { 
    _id: 5,
    nombrePaciente: "Cristian",
    fechaSolicitud: new Date(),
    descripcion: "Otitis aguda",
    estadoCita: "Cancelada",
    motivoCancelacion: "Se fracturó el pie antes de ir",
    personaCancelar: "Cristian"
  },
  { 
    _id: 6,
    nombrePaciente: "Francisco",
    fechaSolicitud: new Date(),
    descripcion: "Amigdalitis",
    estadoCita: "Realizada",
  },
  { 
    _id: 7,
    nombrePaciente: "Edgard",
    fechaSolicitud: new Date(),
    descripcion: "Dolores musculares",
    estadoCita: "Reciente",
  },
];