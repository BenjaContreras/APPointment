import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteObtenerxrutScreenComponent } from './paciente-obtenerxrut-screen.component';

describe('PacienteObtenerxrutScreenComponent', () => {
  let component: PacienteObtenerxrutScreenComponent;
  let fixture: ComponentFixture<PacienteObtenerxrutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteObtenerxrutScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteObtenerxrutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
