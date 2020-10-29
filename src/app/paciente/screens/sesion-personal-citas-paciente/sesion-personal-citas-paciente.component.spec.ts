import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalCitasPacienteComponent } from './sesion-personal-citas-paciente.component';

describe('SesionPersonalCitasPacienteComponent', () => {
  let component: SesionPersonalCitasPacienteComponent;
  let fixture: ComponentFixture<SesionPersonalCitasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalCitasPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalCitasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
