import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteObtenerScreenComponent } from './paciente-obtener-screen.component';

describe('PacienteObtenerScreenComponent', () => {
  let component: PacienteObtenerScreenComponent;
  let fixture: ComponentFixture<PacienteObtenerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteObtenerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteObtenerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
