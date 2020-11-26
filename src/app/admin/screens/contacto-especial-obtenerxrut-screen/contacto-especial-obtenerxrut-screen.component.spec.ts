import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialObtenerxrutScreenComponent } from './contacto-especial-obtenerxrut-screen.component';

describe('ContactoEspecialObtenerxrutScreenComponent', () => {
  let component: ContactoEspecialObtenerxrutScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialObtenerxrutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialObtenerxrutScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialObtenerxrutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
