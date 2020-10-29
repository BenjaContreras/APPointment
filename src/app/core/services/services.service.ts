import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  public usuarioLogin(contraseña: string): boolean {
    if (!(contraseña === 'comparacion con contraseña en la base de datos'))
      return false;
    else
      return true;
  }

}
