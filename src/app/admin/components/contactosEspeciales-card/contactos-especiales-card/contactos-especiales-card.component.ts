import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoPersonal } from 'src/app/core/models/contactoPersonal.model';

@Component({
  selector: 'app-contactosEspeciales-card',
  templateUrl: './contactos-especiales-card.component.html',
  styleUrls: ['./contactos-especiales-card.component.css']
})
export class ContactosEspecialesCardComponent implements OnInit {

  @Input()
  public contactosEsp: ContactoPersonal;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getUrl(): string { 
    return this.router.url;
  }

}
