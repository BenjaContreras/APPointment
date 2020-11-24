import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPacienteComponent } from './obtener-paciente.component';

describe('ObtenerPacienteComponent', () => {
  let component: ObtenerPacienteComponent;
  let fixture: ComponentFixture<ObtenerPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
