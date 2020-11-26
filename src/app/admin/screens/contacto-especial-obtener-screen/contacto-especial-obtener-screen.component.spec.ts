import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialObtenerScreenComponent } from './contacto-especial-obtener-screen.component';

describe('ContactoEspecialObtenerScreenComponent', () => {
  let component: ContactoEspecialObtenerScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialObtenerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialObtenerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialObtenerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
