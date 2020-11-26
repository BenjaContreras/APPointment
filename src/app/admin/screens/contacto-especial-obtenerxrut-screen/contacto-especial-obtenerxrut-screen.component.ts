import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoPersonal } from 'src/app/core/models/contactoPersonal.model';
import { ContactoPersonalProvidersService } from 'src/app/core/providers/contactoPersonal/contacto-personal-providers.service';

@Component({
  selector: 'app-contacto-especial-obtenerxrut-screen',
  templateUrl: './contacto-especial-obtenerxrut-screen.component.html',
  styleUrls: ['./contacto-especial-obtenerxrut-screen.component.css']
})
export class ContactoEspecialObtenerxrutScreenComponent implements OnInit {

  public contactoEspecial$: Observable<ContactoPersonal>;
  constructor(
    private contactoEspecialProviderServices: ContactoPersonalProvidersService,
  ) { 
    this.contactoEspecial$ = this.getContactoEspecial();
  }

  ngOnInit(): void {
  }

  getContactoEspecial() {
    return this.contactoEspecialProviderServices.getAContactoPersonal();
  }

}
