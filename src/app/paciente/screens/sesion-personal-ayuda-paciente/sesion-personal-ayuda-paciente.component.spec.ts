import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalAyudaPacienteComponent } from './sesion-personal-ayuda-paciente.component';

describe('SesionPersonalAyudaPacienteComponent', () => {
  let component: SesionPersonalAyudaPacienteComponent;
  let fixture: ComponentFixture<SesionPersonalAyudaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalAyudaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalAyudaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
