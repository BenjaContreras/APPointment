import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialAgregarScreenComponent } from './contacto-especial-agregar-screen.component';

describe('ContactoEspecialAgregarScreenComponent', () => {
  let component: ContactoEspecialAgregarScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialAgregarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialAgregarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialAgregarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
