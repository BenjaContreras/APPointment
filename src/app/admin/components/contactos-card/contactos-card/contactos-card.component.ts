import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/core/models/contacto.model';

@Component({
  selector: 'app-contactos-card',
  templateUrl: './contactos-card.component.html',
  styleUrls: ['./contactos-card.component.css']
})
export class ContactosCardComponent implements OnInit {

  @Input()
  public contacto: Contacto;
  
  constructor() { }

  ngOnInit(): void {
  }

}
