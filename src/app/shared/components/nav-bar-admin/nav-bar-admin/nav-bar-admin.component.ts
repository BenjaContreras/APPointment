import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }  
  
  
  ngOnInit(): void {

  }

  navegarinicioSesion(){
    this.router.navigate(['/paciente/inicio-sesion-usuario-screen']);
  }

  navegarRegistrarse(){
    this.router.navigate(['/visitante/registrarse-screen']);
  }

  navegarCerrarSesion(){
    this.router.navigate(['/visitante/inicio-screen']);
  }

  navegarContacto(){
    this.router.navigate(['/visitante/contactanos-screen']);
  }

  public getUrl(): string{
    return this.router.url;
  }

}
