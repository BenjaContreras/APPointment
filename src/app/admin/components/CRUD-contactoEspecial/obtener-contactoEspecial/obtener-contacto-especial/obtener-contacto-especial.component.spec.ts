import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerContactoEspecialComponent } from './obtener-contacto-especial.component';

describe('ObtenerContactoEspecialComponent', () => {
  let component: ObtenerContactoEspecialComponent;
  let fixture: ComponentFixture<ObtenerContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
