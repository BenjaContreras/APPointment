import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-izq-admin',
  templateUrl: './nav-bar-izq-admin.component.html',
  styleUrls: ['./nav-bar-izq-admin.component.css']
})
export class NavBarIzqAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string{
    return this.router.url;
  }

  pacientes(){
    this.router.navigate(['/admin/paciente-admin-screen']);
  }

  citas(){
    this.router.navigate(['/admin/cita-admin-screen']);
  }

  doctor(){
    this.router.navigate(['/admin/doctor-admin--screen']);
  }

  contacto(){
    this.router.navigate(['/admin/contacto-admin-screen']);
  }

  contactoPersonal(){
    this.router.navigate(['/admin/contactoPersonal-admin-screen']);
  }
}
