import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/core/models/contacto.model';
import { ContactoProvidersService } from 'src/app/core/providers/contacto/contacto-providers.service';

@Component({
  selector: 'app-contacto-obtener-screen',
  templateUrl: './contacto-obtener-screen.component.html',
  styleUrls: ['./contacto-obtener-screen.component.css']
})
export class ContactoObtenerScreenComponent implements OnInit {

  public contactos$: Observable<Contacto[]>;
  constructor(
    private contactoProviderServices: ContactoProvidersService,
  ) { 
    this.contactos$ = this.getContacto();
  }

  ngOnInit(): void {
  }

  getContacto() {
    return this.contactoProviderServices.getAllContactos();
  }

}
