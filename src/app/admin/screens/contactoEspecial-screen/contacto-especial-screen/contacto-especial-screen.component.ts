import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoPersonal } from 'src/app/core/models/contactoPersonal.model';
import { ContactoPersonalProvidersService } from 'src/app/core/providers/contactoPersonal/contacto-personal-providers.service';

@Component({
  selector: 'app-contacto-especial-screen',
  templateUrl: './contacto-especial-screen.component.html',
  styleUrls: ['./contacto-especial-screen.component.css']
})
export class ContactoEspecialScreenComponent implements OnInit {

  public screenHeight: number;
  public contactosEsp$: Observable<ContactoPersonal[]>;
  constructor(
    private contactoPersonalProviderServices: ContactoPersonalProvidersService,
  ) { 
    this.contactosEsp$ = this.getContactosPersonales();
  }

  ngOnInit(): void {
    
    let { height } = window.screen;
    this.screenHeight = height;
  }

  getContactosPersonales() {
    return this.contactoPersonalProviderServices.getAllContactoPersonals();
  }
}
