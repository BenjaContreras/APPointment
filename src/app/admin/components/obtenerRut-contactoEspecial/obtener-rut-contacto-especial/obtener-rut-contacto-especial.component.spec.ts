import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerRutContactoEspecialComponent } from './obtener-rut-contacto-especial.component';

describe('ObtenerRutContactoEspecialComponent', () => {
  let component: ObtenerRutContactoEspecialComponent;
  let fixture: ComponentFixture<ObtenerRutContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerRutContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerRutContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
