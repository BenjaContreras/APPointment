import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerXRutContactoEspecialComponent } from './obtener-xrut-contacto-especial.component';

describe('ObtenerXRutContactoEspecialComponent', () => {
  let component: ObtenerXRutContactoEspecialComponent;
  let fixture: ComponentFixture<ObtenerXRutContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerXRutContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerXRutContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
