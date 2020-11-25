import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerXRutPacienteComponent } from './obtener-xrut-paciente.component';

describe('ObtenerXRutPacienteComponent', () => {
  let component: ObtenerXRutPacienteComponent;
  let fixture: ComponentFixture<ObtenerXRutPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerXRutPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerXRutPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
