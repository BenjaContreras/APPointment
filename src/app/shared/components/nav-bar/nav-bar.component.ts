import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) {

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