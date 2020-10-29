import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalPacienteComponent } from './sesion-personal-paciente.component';

describe('SesionPersonalPacienteComponent', () => {
  let component: SesionPersonalPacienteComponent;
  let fixture: ComponentFixture<SesionPersonalPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
