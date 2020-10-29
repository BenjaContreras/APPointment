import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../../services/services.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  constructor(private router: Router, private autenticador: ServicesService) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.autenticador.usuarioLogin('contraseña ingresada') == false) {
      console.log('Usted no esta registrado en el sistema');
      this.router.navigate(['/inicio-sesion-screen']);
      return false;
    }
    else return true;
  }
  
}
