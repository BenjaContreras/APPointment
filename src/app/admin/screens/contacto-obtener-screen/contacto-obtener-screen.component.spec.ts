import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoObtenerScreenComponent } from './contacto-obtener-screen.component';

describe('ContactoObtenerScreenComponent', () => {
  let component: ContactoObtenerScreenComponent;
  let fixture: ComponentFixture<ContactoObtenerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoObtenerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoObtenerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
