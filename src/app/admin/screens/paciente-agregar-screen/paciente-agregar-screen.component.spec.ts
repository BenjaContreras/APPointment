import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAgregarScreenComponent } from './paciente-agregar-screen.component';

describe('PacienteAgregarScreenComponent', () => {
  let component: PacienteAgregarScreenComponent;
  let fixture: ComponentFixture<PacienteAgregarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteAgregarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAgregarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
