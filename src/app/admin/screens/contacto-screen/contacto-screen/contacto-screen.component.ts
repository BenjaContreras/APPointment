import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/core/models/contacto.model';
import { ContactoProvidersService } from 'src/app/core/providers/contacto/contacto-providers.service';

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.css']
})
export class ContactoScreenComponent implements OnInit {

  public screenHeight: number;
  public contactos$: Observable<Contacto[]>;
  constructor(
    private contactoProviderServices: ContactoProvidersService,
  ) { 
    this.contactos$ = this.getContacto();
  }

  ngOnInit(): void {
    
    let { height } = window.screen;
    this.screenHeight = height;
  }

  getContacto() {
    return this.contactoProviderServices.getAllContactos();
  }
}
